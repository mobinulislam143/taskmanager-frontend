import React, { Fragment } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';

function HomePage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <h1 className='text-4xl font-bold text-slate-800'>Home Page</h1>
            </MasterLayout>
        </Fragment>
    );
}

export default HomePage;