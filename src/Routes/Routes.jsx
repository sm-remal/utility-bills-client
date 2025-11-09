import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/BillDetails/BillDetails";
import MyPayBills from "../pages/MyPayBills/MyPayBills";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/bills",
                element: <Bills />
            },
            {
                path: "/bill/:id",
                element: <BillDetails />
            },
            {
                path: "/my-bills",
                element: <MyPayBills />
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