import { useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Page() {

    const { Content } = useLoaderData();
    const path = useLocation().pathname.split("/").pop();
    const suffix = path.length === 0 ? "" : " :: " + path;
    const title = "amod kala" + suffix;

    return (
        <div>
            <head>
                <title>{title}</title>
            </head>
            <Navbar />
            <Content />
        </div>
    )
}
