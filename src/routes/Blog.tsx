import { Outlet, Link } from "react-router-dom";
import street from "../images/vermeer-little-street.jpg";

export default function Blog() {

    return (
        <div>
            <div>
                <h2>Blog</h2>
                Nothing here yet!
                <img className="w-full h-auto" src={ street } />
            </div>
            <footer>
                <Link to="/">Back to the main site</Link>
            </footer>
        </div>
    )
}
