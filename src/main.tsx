import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  lazy,
} from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Post from "./routes/Post";
import Projects from "./routes/Projects";
import Notes from "./routes/Notes";
import Note from "./routes/Note";
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
        path: "/blog/:post",
        loader: async ({ params }) => {
            const module = await import(`./content/blog/${params.post}.mdx`);
            return { Content: module.default };
        },
        element: <Post />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/notes",
        element: <Notes />
    },
    {
        path: "/notes/:note",
        loader: async ({ params }) => {
            const module = await import(`./content/notes/${params.note}.mdx`);
            return { Content: module.default };
        },
        element: <Note />
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="max-w-prose m-auto py-7 leading-6">
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
)
