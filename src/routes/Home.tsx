import { Outlet, Link } from "react-router-dom";
import delft from "../images/vermeer-view-of-delft.jpg";
import resume from "../content/amodkala_resume.pdf";

export default function Home() {
    return (
        <div>
            <h2>Amod Kala</h2>
            <img className="w-full h-auto" src={ delft } />
            <p>Now</p>
            <ul>
                <li>
                    Self-studying econometrics, reinforcement learning, and
                    database design
                </li>
                <li>
                    Working on an assortment of <Link
                        to="projects">projects</Link>
                </li>
                <li>
                    Writing the occasional <Link to="blog">blog</Link> post
                </li>
            </ul>
            <p>Previously</p>
            <ul>
                <li>
                    Graduated from University of Waterloo
                </li>
            </ul>
            <ul className="pl-0">
                <li className="inline pr-1.5">
                    <Link to="https://www.linkedin.com/in/amodkala/" 
                        target="_blank">LinkedIn</Link>
                </li>
                <li className="inline pr-1.5">
                    <Link to="https://github.com/amodkala/" 
                        target="_blank">GitHub</Link>
                </li>
                <li className="inline pr-1.5">
                    <Link to={ resume } 
                        target="_blank">Resume</Link>
                </li>
            </ul>
        </div>
    )
}
