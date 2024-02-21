import React from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';

function Layout(props) {
    return (
        <div>
            <AppNavbar/>
                {props.children}
                
            <Footer/>
        </div>
    );
}

export default Layout;