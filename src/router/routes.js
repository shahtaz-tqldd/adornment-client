import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
])