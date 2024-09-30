import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/Layout/MasterLayout';
import LazyLoader from '../components/Layout/LazyLoader';
const Profile = lazy(()=> import('../components/Profile/Profile'));


function ProfilePage(props) {
    return (
       <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Profile/>
            </Suspense>
        </MasterLayout>
       </Fragment>
    );
}

export default ProfilePage;