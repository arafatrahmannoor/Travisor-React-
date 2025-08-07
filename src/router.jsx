import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Attractions from "./pages/Attractions";
import Travels from "./pages/Travels";
import Stayes from "./pages/Stayes";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import UserPage from "./pages/Userpage";
import Dashboard from "./pages/stays/Dashboard";
import BookingModal from "./pages/stays/BookingModal";
import Admin from "./pages/stays/Admin";
import CoxBazar from "./pages/Event/CoxBazar";
import Jaflong from "./pages/Event/Jaflong";
import Paharpur from "./pages/Event/paharpur";
import SudarBan from "./pages/Event/SudarBan";
import Sajek from "./pages/Event/Sajek";
import Tanguar from "./pages/Event/Tanguar";

const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children:[
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/attractions",
            element: <Attractions />,
        },
        {
            path: "/travels",
            element: <Travels />,
        },
        {
            path: "/stays",
            element: <Stayes />,
        },
        {
            path: "/help",
            element: <Help />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/payment",
            element: <Payment />,
        },
        {
            path: "/settings",
            element: <Settings />,
        },
        {
            path: "/userpage",
            element: <UserPage />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/bookingmodal",
            element: <BookingModal />,
        },
        {
            path: "/admin",
            element: <Admin />,
        },
        {
            path: "/coxbazar",
            element: <CoxBazar />,
        },
        {
            path: "/jaflong",
            element: <Jaflong />,
        },
        {
            path: "/paharpur",
            element: <Paharpur />,
        },
        {
            path: "/sundarban",
            element: <SudarBan />,
        },
        {
            path: "/sajek",
            element: <Sajek />,
        },
        {
            path: "/tanguar",
            element: <Tanguar />,
        },
    ],
},
]);

export default router;
