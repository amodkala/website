import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <ul className="px-0">
                <li className="inline pr-1.5">
                    <NavLink to="/">home</NavLink>
                </li>
                <li className="inline pr-1.5">
                    <NavLink to="/blog">blog</NavLink>
                </li>
            </ul>
        </div>
    )
}
