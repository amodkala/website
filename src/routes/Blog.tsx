import { Outlet, Link } from "react-router-dom";
import Content from "../pages/blog.mdx";

export default function Blog() {

    return (
        <div>
            <Content />
            <footer>
                <Link to="/">Back to the main site</Link>
            </footer>
        </div>
    )
}
