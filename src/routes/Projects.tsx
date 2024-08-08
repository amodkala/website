import { Outlet, Link } from "react-router-dom";
import Content from "../pages/projects.mdx";

export default function Projects() {
    return (
        <div>
            <Content />
            <footer>
                <Link to="/">Back to the main site</Link>
            </footer>
        </div>
    )
}
