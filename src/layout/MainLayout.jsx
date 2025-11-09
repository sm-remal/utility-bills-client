import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <NavBar></NavBar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;