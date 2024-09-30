import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const Canceled = lazy(()=> import('../components/Canceled/Canceled'))

function CanceledPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled/>
                </Suspense>

            </MasterLayout>
        </Fragment>
    );
}

export default CanceledPage;