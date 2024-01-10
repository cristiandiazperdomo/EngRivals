import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Theme
                accentColor="crimson"
                grayColor="sand"
                radius="large"
                scaling="95%"
            >
                <App />
            </Theme>
        </BrowserRouter>
    </React.StrictMode>
);
