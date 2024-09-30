import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const DashBoard = lazy(()=> import('../components/Dashboard/DashBoard'));

function DashboardPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <DashBoard/>
                </Suspense>
              
            </MasterLayout>
        </Fragment>
    );
}

export default DashboardPage;