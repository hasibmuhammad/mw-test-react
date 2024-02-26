import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Problem1 from "../components/Problem1";
import Problem2 from "../components/Problem2";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "problem1",
                element: <Problem1/>
            },
            {
                path: 'problem2',
                element: <Problem2/>
            }
        ]
    }
])