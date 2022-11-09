import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";
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
                path: '*',
                element : <Errorpage />
            }
        ]
    }
])