import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const Completed = lazy(()=> import('../components/Completed/Completed'))


function CompletedPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Completed/>
            
                </Suspense>

            </MasterLayout>
        </Fragment>
      
        

    )
}

export default CompletedPage;