import { Link, useLoaderData } from "react-router-dom";

export default function Post() {

    const { Content } = useLoaderData();

    return (
        <div>
            <Content />
            <footer>
                <Link to="/blog">Back to blog </Link>
            </footer>
        </div>
    )
}
