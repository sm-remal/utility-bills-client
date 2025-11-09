import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm'>
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