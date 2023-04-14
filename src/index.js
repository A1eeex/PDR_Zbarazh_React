import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from './App';

import {
    BrowserRouter,
} from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <BrowserRouter basename="/PDR_Zbarazh_React">
            <App />
        </BrowserRouter>
    </StrictMode>
)
