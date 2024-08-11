import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <ul className="pl-0">
                <li className="inline pr-1.5">
                    <NavLink to="/">home</NavLink>
                </li>
                <li className="inline pr-1.5">
                    <NavLink to="/blog">blog</NavLink>
                </li>
                <li className="inline pr-1.5">
                    <NavLink to="/projects">projects</NavLink>
                </li>
                <li className="inline pr-1.5">
                    <NavLink to="/notes">notes</NavLink>
                </li>
            </ul>
        </div>
    )
}
