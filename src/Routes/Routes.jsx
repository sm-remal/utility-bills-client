import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/BillDetails/BillDetails";
import MyPayBills from "../pages/MyPayBills/MyPayBills";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:3000/latest-bills"),
                element: <Home />
            },
            {
                path: "/bills",
                loader: () => fetch("http://localhost:3000/bill-category"),
                element: <Bills />
            },
            {
                path: "/bill-details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/bills/${params.id}`),
                element: <PrivateRoutes>
                    <BillDetails />
                </PrivateRoutes>
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
        ]
    },
]);