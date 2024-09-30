import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const New = lazy(()=> import('../components/New/New'));


function NewPage(props) {
    return (
        <Fragment>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <New/>
            </Suspense>

            </MasterLayout>
        </Fragment>
    );
}

export default NewPage;