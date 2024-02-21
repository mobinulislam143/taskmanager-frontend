import React from 'react';
import ListProduct from '../component/product/ListProduct';
import Layout from '../component/Layout/Layout'

function ProductListPage(props) {
    return ( 
        <Layout>
            <ListProduct/>
        </Layout>
    );
}

export default ProductListPage;