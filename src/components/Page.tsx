import { useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Page() {

    const { Content } = useLoaderData();
    const location = useLocation();

    return (
        <div>
            <head>
                <title>{location.pathname}</title>
            </head>
            <Navbar />
            <Content />
        </div>
    )
}
