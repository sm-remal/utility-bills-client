import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';
import useAuth from '../hooks/useAuth';

const MainLayout = () => {
    const { loading: authLoading } = useAuth(); 
    const navigation = useNavigation();        

    if (navigation.state === "loading" || authLoading) {
        return <Loading />;
    }

    return (
        <div className='bg-base-200 flex flex-col min-h-screen max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm'>
            <Navbar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLayout;
