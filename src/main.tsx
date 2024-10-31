import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./components/Page";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        loader: async ({ params }) => {
            const module = await import(`./content/pages/home.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/:page",
        loader: async ({ params }) => {
            const module = await import(`./content/pages/${params.page}.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/:page/:subpage",
        loader: async ({ params }) => {
            const module = await import(`./content/${params.page}/${params.subpage}.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="max-w-3xl m-auto py-7 leading-6">
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
)
