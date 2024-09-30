import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const Create = lazy(()=> import('../components/Create/Create'));


function CreatePage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>
                </Suspense>

            </MasterLayout>
        </Fragment>
    );
}

export default CreatePage;