import React, { useEffect } from 'react';
import Layout from '../component/Layout/Layout';
import UserProduct from '../component/product/UserProduct';
import ProductStore from '../component/Store/ProductStore';

function UserProductPage(props) {
    const {UserProductListRequest} = ProductStore()
    useEffect(()=>{
        (async()=>{
            await UserProductListRequest()
        })()
    },[])
    return (
        <Layout>
            <UserProduct/>
        </Layout>
    );
}

export default UserProductPage;