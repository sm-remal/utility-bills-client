import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;