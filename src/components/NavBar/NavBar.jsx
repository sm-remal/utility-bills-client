import { Link, NavLink, useNavigate } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/errorMessage";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo1.png";


const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // ============ Sign Out ===============
  const handleSignout = () => {
    toast.loading("Please wait for signout...", { id: "signout" });
    signOutUser()
      .then(() => {
        toast.success("Signout successful!", { id: "signout" });
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err.code);
        // setError(errorMessage);
        toast.error(errorMessage, { id: "login" });
      });
  };

  // ============ Theme Switcher ===========
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // ============ Menu Items ==============
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>
          <GoHomeFill className="text-lg" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/bills"}>
          <BsReceipt className="text-lg" /> Bills
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/my-bills"}>
            <MdPayments className="text-lg" /> My Pay Bills
          </NavLink>
        </li>
      )}

      {/* ========== Theme Controller ========== */}
      <div className="flex justify-start items-start ml-2 md:-ml-2">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" className="theme-controller" value="synthwave" />

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </>
  );

  return (
    <div
      className={`navbar shadow-sm px-4 transition-all duration-300 ${theme === "dark"
        ? "bg-gray-900 text-gray-100"
        : "bg-pink-50 text-gray-900"
        }`}
    >
      {/* Navbar Start: Mobile Hamburger + Logo */}
      <div className="navbar-start flex items-center gap-3">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-5.5 -ml-3 p-2 shadow rounded-box w-52 ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-base-100"}`}
          >
            {menuItems}
          </ul>
        </div>



        {/* Logo */}
        <Link to={"/"} className="">
          <img src={logo} alt="logo" className="w-[160px]" />
        </Link>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4 ml-2">
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {menuItems}
          </ul>
        </div>

        {/* Auth Buttons */}
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white border-none"
            >
              <IoLogIn /> Login
            </Link>
            <Link
              to={"/registration"}
              className="btn btn-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-100"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to={"/my-profile"} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
                <img
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </Link>
            <button
              onClick={handleSignout}
              className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white border-none"
            >
              <IoLogOut /> Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
