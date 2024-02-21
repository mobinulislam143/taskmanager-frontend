import React, { useEffect } from 'react';
import Layout from '../component/Layout/Layout';
import Product from '../component/product/Product';
import ProductStore from '../component/Store/ProductStore';

function ProductPage(props) {
    const { ProductListRequest } = ProductStore()
    useEffect(()=>{
        (async()=>{
            await ProductListRequest()
        })()
    },[])
    return (
        <Layout>
            <Product/>
        </Layout>
    );
}

export default ProductPage;