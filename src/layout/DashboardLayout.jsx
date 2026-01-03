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
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-pink-100">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="px-3 cursor-pointer">
                        {/* Sidebar toggle icon */}
                        <LuPanelLeftOpen className='text-xl' />
                    </label>
                    <Link to={"/"} className="">
                        <img src={logo} alt="logo" className="w-[160px]" />
                    </Link>
                </nav>
                {/* Page content here */}
                <div className='min-h-screen bg-base-200'>
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-pink-100 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            {/* Home  */}
                            <NavLink to={"/"} className={navLinkClass} data-tip="Homepage">
                                <IoHome className='text-xl' />
                                <span className="is-drawer-close:hidden">Home</span>
                            </NavLink>

                            {/* My Bills  */}
                            <NavLink to={"/dashboard/my-bills"} className={navLinkClass} data-tip="My pay Bills">
                                <MdPayments className='text-xl' />
                                <span className="is-drawer-close:hidden">My Pay Bills</span>
                            </NavLink>

                            {/* Profile  */}
                            <NavLink to={"/dashboard/my-profile"} className={navLinkClass} data-tip="My Profile">
                                <FaUserCircle className='text-xl' />
                                <span className="is-drawer-close:hidden">My Profile</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
