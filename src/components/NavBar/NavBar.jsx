// import { Link, NavLink, useNavigate } from "react-router";
// import { GoHomeFill } from "react-icons/go";
// import { IoLogIn, IoLogOut } from "react-icons/io5";
// import { MdPayments } from "react-icons/md";
// import { BsReceipt } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { getErrorMessage } from "../../utility/errorMessage";
// import useAuth from "../../hooks/useAuth";

// const Navbar = () => {
//   const { user, signOutUser } = useAuth();
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignout = () => {
//     toast.loading("Please wait for signout...", { id: "signout" });
//     signOutUser()
//       .then(() => {
//         toast.success("Signout successful!", { id: "signout" });
//         navigate("/");
//       })
//       .catch((err) => {
//         const errorMessage = getErrorMessage(err.code);
//         setError(errorMessage);
//         toast.error(error, { id: "login" });
//       });
//   };

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div className="navbar shadow-sm bg-base-100/80 backdrop-blur-md max-w-7xl mx-auto px-3 sm:px-6">
//       {/* Left Side - Logo */}
//       <div className="navbar-start">
//         <Link
//           to={"/"}
//           className="flex items-center gap-2 text-xl font-bold text-pink-600"
//         >
//           ⚡ UtilityPay
//         </Link>
//       </div>

//       {/* Right Side - Menu */}
//       <div className="navbar-end gap-3">
//         <ul className="menu menu-horizontal px-1 gap-4 text-[15px] font-medium items-center">
//           <li>
//             <NavLink to={"/"}>
//               <GoHomeFill className="text-lg" /> Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to={"/bills"}>
//               <BsReceipt className="text-lg" /> Bills
//             </NavLink>
//           </li>

//           {user ? (
//             <>
//               <li>
//                 <NavLink to={"/my-bills"}>
//                   <MdPayments className="text-lg" /> My Pay Bills
//                 </NavLink>
//               </li>

//               {/* Avatar */}
//               <li>
//                 <Link to={"/profile"} className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
//                     <img
//                       alt="User avatar"
//                       referrerPolicy="no-referrer"
//                       src={
//                         user?.photoURL ||
//                         "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                       }
//                     />
//                   </div>
//                 </Link>
//               </li>

//               {/* Logout */}
//               <li>
//                 <button
//                   onClick={handleSignout}
//                   className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
//                 >
//                   <IoLogOut /> Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link
//                   to={"/login"}
//                   className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
//                 >
//                   <IoLogIn /> Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={"/registration"}
//                   className="btn btn-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-100"
//                 >
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link, NavLink, useNavigate } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/errorMessage";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignout = () => {
    toast.loading("Please wait for signout...", { id: "signout" });
    signOutUser()
      .then(() => {
        toast.success("Signout successful!", { id: "signout" });
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err.code);
        setError(errorMessage);
        toast.error(error, { id: "login" });
      });
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Menu items
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
          <NavLink to={"/my-pay-bills"}>
            <MdPayments className="text-lg" /> My Pay Bills
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 px-4">
      {/* Navbar Start: Mobile Hamburger + Logo */}
      <div className="navbar-start flex items-center gap-2">
        {/* Mobile Hamburger Icon */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to={"/"}
          className="flex items-center gap-2 text-xl font-bold text-pink-600"
        >
          ⚡ UtilityPay
        </Link>
      </div>

      {/* Desktop Menu (Right side) */}
      {/* <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          {menuItems}
        </ul>
      </div> */}

      {/* Right Side: Login/Register or Avatar+Logout */}
      <div className="navbar-end flex items-center gap-2 ml-2">
        <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          {menuItems}
        </ul>
      </div>
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
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
            <Link to={"/profile"} className="flex items-center gap-2">
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
              className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
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

