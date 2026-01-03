import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/BillDetails/BillDetails";
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
import MyPayBills from "../pages/MyPayBills/MyPayBills";
import DashboardLayout from "../layout/DashboardLayout";


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
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
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

    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: "my-bills",
                element: <MyPayBills />
            },
            {
                path: "my-profile",
                element: <MyProfile />
            },
        ]
        
    }
]);