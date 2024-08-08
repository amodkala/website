import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Projects from "./routes/Projects";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/projects",
        element: <Projects />
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="max-w-prose m-auto py-7 leading-6">
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
)
