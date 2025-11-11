import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className='bg-base-200 flex flex-col min-h-screen max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm'>
            <Navbar />
            <div className='flex-1'>
                {
                    navigation?.state === "loading" ? <Loading></Loading> : <Outlet></Outlet>
                }
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLayout;
