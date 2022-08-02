import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    BrowserRouter,
    Route,
    Routes,
    Switch,
    withRouter,
    Link,
    useHistory,
    Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Modulo General */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}