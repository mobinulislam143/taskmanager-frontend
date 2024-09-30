import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const Progress = lazy(()=> import('../components/Progress/Progress'))

function ProgressPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
}

export default ProgressPage;