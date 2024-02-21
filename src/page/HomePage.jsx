import React, { useEffect } from 'react';
import Product from '../component/product/Product';
import Layout from '../component/Layout/Layout';
import Carousel from '../component/Layout/Carousel';

function HomePage(props) {
   
    return (
        <div>
            <Layout>
                <Carousel/>
                <Product/>
            </Layout>
        </div>
    );
}

export default HomePage;