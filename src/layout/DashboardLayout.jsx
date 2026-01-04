import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { LuPanelLeftOpen } from "react-icons/lu";
import { MdPayments } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router';
import logo from "../assets/logo.png"

const DashboardLayout = () => {
    // Helper function for active link classes
    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded hover:bg-pink-200 transition-all ${
            isActive ? 'text-pink-600 font-semibold' : 'text-gray-700'
        }`;

    return (
        <div className="bg-base-200">
            {/* SAME max-width container like MainLayout */}
            <div className="drawer lg:drawer-open max-w-screen-2xl m-auto max-xl:max-w-7xl max-lg:max-w-5xl max-md:max-w-3xl max-sm:max-w-screen-sm">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-pink-100">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="px-3 cursor-pointer">
                            <LuPanelLeftOpen className='text-xl dark:text-gray-800' />
                        </label>
                        <Link to={"/"}>
                            <img src={logo} alt="logo" className="w-[160px]" />
                        </Link>
                    </nav>

                    {/* Page content */}
                    <div className='min-h-screen bg-base-200'>
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="flex min-h-full flex-col items-start bg-pink-100 is-drawer-close:w-14 is-drawer-open:w-64">
                        <ul className="menu w-full grow">
                            <li>
                                <NavLink to={"/"} className={navLinkClass}>
                                    <IoHome className='text-xl' />
                                    <span className="is-drawer-close:hidden">Home</span>
                                </NavLink>

                                <NavLink to={"/dashboard/my-bills"} className={navLinkClass}>
                                    <MdPayments className='text-xl' />
                                    <span className="is-drawer-close:hidden">My Pay Bills</span>
                                </NavLink>

                                <NavLink to={"/dashboard/my-profile"} className={navLinkClass}>
                                    <FaUserCircle className='text-xl' />
                                    <span className="is-drawer-close:hidden">My Profile</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout; 
