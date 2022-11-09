import { createBrowserRouter } from "react-router-dom";
import Blogs from "../pages/Blogs/Blogs";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Services from "../pages/Service/Services";
import SignUp from "../pages/SignUp/SignUp";
import Main from "./Main";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        children : [
            {
                path: '/',
                element : <Homepage />
            },
            {
                path: '/services',
                element : <Services />
            },
            {
                path: '/blogs',
                element : <Blogs />
            },
            {
                path: '/login',
                element : <Login />
            },
            {
                path: '/sign-up',
                element : <SignUp />
            },
            {
                path: '*',
                element : <Errorpage />
            }
        ]
    }
])