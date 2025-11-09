import { Link, NavLink, useNavigate } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utility/errorMessage";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // signout function 
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

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  return (
    <div className="navbar shadow-sm rounded-full bg-base-100/80 backdrop-blur-md max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 px-3 sm:px-6">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-xl font-bold text-pink-600"
        >
          ⚡ UtilityPay
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-[15px] font-medium">
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
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2 sm:gap-3">
        {!user ? (
          <>
            <Link
              to={"/auth/login"}
              className="btn btn-sm rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
            >
              <IoLogIn /> Login
            </Link>
            <Link
              to={"/auth/register"}
              className="btn btn-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-100"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-3">
            {/* Profile Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full border border-gray-300">
                  <img
                    alt="User avatar"
                    referrerPolicy="no-referrer"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2"
              >
                <div className="pb-2 border-b border-gray-200 mb-2">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li>
                  <Link to={"/profile"}>
                    <FaUserCircle /> Profile
                  </Link>
                </li>
                <li>
                  <label className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm">Dark Mode</span>
                    <input
                      onChange={(e) => handleTheme(e.target.checked)}
                      type="checkbox"
                      defaultChecked={theme === "dark"}
                      className="toggle toggle-sm"
                    />
                  </label>
                </li>
                <li>
                  <button
                    onClick={handleSignout}
                    className="btn btn-xs bg-gradient-to-r from-pink-500 to-red-500 text-white"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
