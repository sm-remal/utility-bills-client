import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/BillDetails/BillDetails";
import MyPayBills from "../pages/MyPayBills/MyPayBills";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About/About";
import FAQ from "../pages/FAQ/FAQ";
import MyProfile from "../pages/MyProfile/MyProfile";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../components/Contact/Contact";
import Terms from "../pages/Terms/Terms";
import Cookies from "../components/Cookies/Cookies";
import Privacy from "../pages/Privacy/Privacy";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import MyPayments from "../pages/Dashboard/User/MyPayments";
// import Profile from "../pages/Dashboard/User/Profile";
// import ManageBills from "../pages/Dashboard/Admin/ManageBills";
// import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("https://utility-bills-server.vercel.app/latest-bills"),
                element: <Home />
            },
            {
                path: "/bills",
                loader: () => fetch("https://utility-bills-server.vercel.app/bill-category"),
                element: <Bills />
            },
            {
                path: "/bill-details/:id",
                loader: ({ params }) => fetch(`https://utility-bills-server.vercel.app/bills/${params.id}`),
                element: <BillDetails />
            },
            {
                path: "/my-bills",
                element: <PrivateRoutes>
                    <MyPayBills />
                </PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/my-profile",
                element: <PrivateRoutes>
                    <MyProfile />
                </PrivateRoutes>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "terms",
                element: <Terms />
            },
            {
                path: "cookies",
                element: <Cookies />
            },
            {
                path: "privacy",
                element: <Privacy />
            },
        ]
    },

    // ========== Dashboard ========= 

    // {
    //     path: "dashboard",
    //     element: <Dashboard />,
    //     children: [

    //         // ========== User Routes ========== 
    //         {
    //             path: "my-payments",
    //             element: <MyPayments></MyPayments>
    //         },
    //         {
    //             path: "profile",
    //             element: <Profile></Profile>
    //         },

    //         // ========== Admin Routes ==========
    //         {
    //             path: "profile",
    //             element: <ManageBills></ManageBills>
    //         },
    //         {
    //             path: "profile",
    //             element: <ManageUsers></ManageUsers>
    //         },
    //     ]
    // }
]);