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
        path: "/blog",
        loader: async ({ params }) => {
            const module = await import(`./content/pages/blog.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/blog/:post",
        loader: async ({ params }) => {
            const module = await import(`./content/blog/${params.post}.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/projects",
        loader: async ({ params }) => {
            const module = await import(`./content/pages/projects.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/notes",
        loader: async ({ params }) => {
            const module = await import(`./content/pages/notes.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
    {
        path: "/notes/:note",
        loader: async ({ params }) => {
            const module = await import(`./content/notes/${params.note}.mdx`);
            return { Content: module.default };
        },
        element: <Page />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="max-w-5xl m-auto py-7 leading-6">
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
)
