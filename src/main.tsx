import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./Home";
import "./index.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="max-w-3xl m-auto py-7 leading-6">
            <Home />
        </div>
    </StrictMode>,
)
