import { useState } from "react";

export default function Collapsible({ children }) {
    const [active, setActive] = useState(false);
    const text = active ? "hide" : "show";
    return (
        <div>
            <button onClick={() => setActive(!active)}>{text}</button>
            { active ? children : null }
        </div>
    );
}
