import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductStore from '../Store/ProductStore';
import toast from 'react-hot-toast';
import UpdateProductSkeletong from './UpdateProductSkeletong';

function UpdateProduct(props) {
    const { UpdateProductForm, UpdateFormChange, ProductDetails, ProductSaveRequest, ProductDetailsRequest } = ProductStore();
    const { id } = useParams();
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Set the image URL when component mounts
        if (ProductDetails && ProductDetails.image) {
            setImageUrl(ProductDetails.image);
        }
    }, [ProductDetails]);

    const OnSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!UpdateProductForm.name || !UpdateProductForm.brand || !UpdateProductForm.category || !UpdateProductForm.description || !UpdateProductForm.price) {
                toast.error("Please fill in all the required fields.");
                return;
            }

            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append('name', UpdateProductForm.name);
            formData.append('brand', UpdateProductForm.brand);
            formData.append('category', UpdateProductForm.category);
            formData.append('description', UpdateProductForm.description);
            formData.append('price', UpdateProductForm.price);

            let res = await ProductSaveRequest(ProductDetails._id, formData);
            if (res) {
                toast.success("Product updated successfully");
                await ProductDetailsRequest(id);
            } else {
                toast.error("Failed to update product");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("Failed to update product");
        }
    };

    if (ProductDetails === null) {
        return <UpdateProductSkeletong />;
    } else {
    return (
        <div>
           <div className='container-fluid'>
             <div className='container mx-auto my-5'>
                <h2 className='text-3xl font-bold text-center my-10'>Update Product</h2>
                <div className='card shadow-sm p-4 bg-white'>
                        <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1'>
                            <div className='image flex flex-col items-center'>
                                <label htmlFor='imageInput'>
                                <img
                                    src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
                                            className='w-60 rounded-2xl align-center cursor-pointer my-3 hover:opacity-75 transition-all'
                                            alt='Profile'
                                        />
                                    </label>
                                    <input id='imageInput' type='file' accept='image/*' className='hidden' onChange={(e) => setImageFile(e.target.files[0])}
                                    />
                                
                            </div>


                            <div className="mb-5">
                                <label for="name" className="block mb-2 text-gray-900">Name</label>
                                <input type="text" id="name" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={UpdateProductForm.name} onChange={(e) => {UpdateFormChange('name', e.target.value)}} placeholder="Name" required />

                                <div className="my-10">
                                    <label for="brand" className="block mb-2 text-gray-900">Brand</label>
                                    <input type="text" id="brand" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={UpdateProductForm.brand} onChange={(e) => {UpdateFormChange('brand', e.target.value)}} placeholder="Brand" required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label for="category" className="block mb-2 text-gray-900">Category</label>
                                <input type="text" id="category" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={UpdateProductForm.category} onChange={(e) => {UpdateFormChange('category', e.target.value)}} placeholder="Category" required />
                            </div>
                            <div className="mb-5">
                                <label for="desc" className="block mb-2 text-gray-900">Description</label>
                                <input type="text" id="desc" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={UpdateProductForm.description} onChange={(e) => {UpdateFormChange('description', e.target.value)}} placeholder="Description" required />
                            </div>
                            <div className="mb-5">
                                <label for="price" className="block mb-2 text-gray-900">Price</label>
                                <input type="text" id="price" className="0 w-full py-2 px-1 border-2 text-gray-900 text-sm rounded-lg " value={UpdateProductForm.price} onChange={(e) => {UpdateFormChange('price', e.target.value)}} placeholder="Price" required />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <button onClick={(e) => OnSubmit(e)} className='btn bg-yellow-500 hover:bg-yellow-600 w-full '>Update</button>
                               
                            </div>
                        </div>
                </div>
             </div>
           </div> 
        </div>
    );
   }
}

export default UpdateProduct;
