import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

export default function Page() {

    const { Content } = useLoaderData();

    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
}
