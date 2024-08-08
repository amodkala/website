import { Outlet, Link } from "react-router-dom";

export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div>
                <h3>July 2024</h3>
                <ul>
                    <li>
                        <p>
                        <b>Waitlist</b><br/>
                        Acuity is a popular scheduling service for
                        appointment-based small businesses, but they lack a
                        native waitlist feature. I used their REST API and Webhook
                        integrations along with a simple serverless architecture
                        (API Gateway, Lambda, Twilio API) to implement a waitlist
                        with SMS notifications for a local business. 
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Earlier</h3>
                <ul>
                    <li>
                        <p>
                        <b>Transformer</b> 
                        <em>
                            (<Link to="https://github.com/amodkala/transformer"
                                target="_blank">code</Link>)
                        </em><br/>
                        I wrote a decoder-only transformer text classifier in 
                        PyTorch for my ML final. Initially trained via Google
                        Colab, I later rewrote my train/test/eval code for 
                        portability to GPU-enabled VPSes and for model export to
                        ONNX format.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Raft</b>
                        <em>
                            (<Link to="https://github.com/amodkala/database"
                                target="_blank">code</Link>)
                        </em><br/>
                        In an effort to self-study distributed systems, I 
                        implemented a distributed disk-resident log (WAL) with
                        eventual consistency provided by a simple implementation of
                        the raft consensus algorithm.
                        </p>
                    </li>
                </ul>
            </div>
            <footer>
                <Link to="/">Back to the main site</Link>
            </footer>
        </div>
    )
}
