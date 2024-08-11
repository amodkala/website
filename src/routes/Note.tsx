import { Link, useLoaderData } from "react-router-dom";

export default function Note() {

    const { Content } = useLoaderData();

    return (
        <div>
            <Content />
            <footer>
                <Link to="/notes">Back to notes</Link>
            </footer>
        </div>
    )
}
