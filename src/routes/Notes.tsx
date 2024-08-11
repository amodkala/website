import { Outlet, Link } from "react-router-dom";
import Content from "../pages/notes.mdx";

export default function Notes() {

    return (
        <div>
            <Content />
            <footer>
                <Link to="/">Back to the main site</Link>
            </footer>
        </div>
    )
}
