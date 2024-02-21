import axios from 'axios';
import { create } from 'zustand';
import { unauthorized } from '../utility/utility';
 
const ProductStore = create((set) =>({
    ProductList: null,

    ProductListRequest: async () =>{
        try {
            let res = await axios.get(`/api/All-product`); 
            console.log(res)
            if (res.data['status'] === 'success') {
                set({ProductList:res.data['data']})
            }
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    },

    UserProductList: null,
    UserProductListRequest: async() => {
       try{
        let res = await axios.get('/api/userallProduct')
        set({UserProductList: res.data['data']})

       }catch(e){
            unauthorized(e.response.status);
       }
    },

    UpdateProductForm: {
        name: "",
        brand: "",
        category: "",
        description: "",
        image: "",
        price: "",
    },

    UpdateFormChange: (name, value) =>{
        set((state) => ({
            UpdateProductForm:{
                ...state.UpdateProductForm,
                [name]: value
            }
        }))
    },

    ProductDetails: null,
    ProductDetailsRequest: async (productId) => {
        try {
            set({ ProductDetails: null });
            const res = await axios.get(`/api/ReadProductById/`+productId);
            if (res.data.status === 'success') {
                set({ ProductDetails:  res.data['data'][0]});
                set({UpdateProductForm: res.data['data'][0]})
            } 
        } catch (error) {
            unauthorized(e.response.status);
        }
    },

    ProductSaveRequest: async(productId,postBody) =>{
        try{
            set({ProductDetails: null})
            let res = await axios.post(`/api/update-product/${productId}`, postBody)
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status);
        }
    },

    RemoveProductRequest: async(productId)=> {
        try{
            let res = await axios.get(`/api/deleteProductByUser/${productId}`)
            // set({UserProductList: res.data['data']})
            return res.data['status'] === 'success';

        }catch(e){
            console.error('Error while removing product list:', e);
        }
    },

    newProduct: null,
    CreateProductRequest: async(postBody) => {
        try {
            const response = await axios.post(`/api/create-product`, postBody);
            return response.data; 
        } catch (error) {
            console.error("Error creating product:", error);
            throw error; 
        }
    },
    SearchKeyword: "",
    SetSearchKeyword: async(keyword)=>{
        set({SearchKeyword: keyword})
    },

    SearchProduct: null,

    ListByNameRequest: async (keyword) => {
        try {
            let res = await axios.get(`/api/product-by-keyword/${keyword}`);
            if (res.data['status'] === 'success') {
                set({ SearchProduct: res.data['data'] });
                console.log(res.data['data'])
            }
        } catch (error) {
            console.error("Error fetching products by name:", error.toString());
        }
    },

    // FilterProduct: {
    //     brand: "",
    //     category: "",
        
    // },
    // FilterFormOnChange: (name, value) =>{
    //     set((state) => ({
    //         FilterProduct:{
    //             ...state.FilterProduct,
    //             [name]: value
    //         }
    //     }))
    // },


    ListByFilterRequest: async(postBody)=>{
        try{
            set({SearchProduct: null})
            let res = await axios.post(`/api/ProductByBrandAndCategory`, postBody)
            if(res.data['status']==="success"){
                set({SearchProduct:res.data['data']})
            }
        }catch(e){
            console.error("Error in Axios request:", e.toString());

        }
    }


   

}))

export default ProductStore