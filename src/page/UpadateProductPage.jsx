import React, { useEffect } from 'react';
import Layout from '../component/Layout/Layout';
import UpdateProduct from '../component/product/UpdateProduct';
import ProductStore from '../component/Store/ProductStore';
import { useParams } from 'react-router-dom';

function UpdateProductPage(props) { 
    const { ProductDetailsRequest } = ProductStore();
    const { id } = useParams();  

    useEffect(() => {
        const fetchData = async () => {
            try {
                await ProductDetailsRequest(id); // Pass the extracted id
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchData();
    }, [id, ProductDetailsRequest]);

    return (
        <Layout>
            <UpdateProduct/>
        </Layout>
    );
}

export default UpdateProductPage;
