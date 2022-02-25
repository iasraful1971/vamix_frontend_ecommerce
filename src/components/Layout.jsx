import React from 'react';
import Spinner from '../extra/spinners/Spinner';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children , loading}) => {
    return (
        <div>
            <Header/>
            {
                loading ? <Spinner/> :  <div className="content">
                {children}
            </div>
            }
            <Footer/>
        </div>
    );
};

export default Layout;