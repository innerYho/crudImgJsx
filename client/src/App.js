import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./pages/AgenteFinanciado"
import AgenteNewnet from "./pages/AgenteNewnet"


import Tabla from "./pages/TyTtabla"
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
                    {/* newnet */}
                    <Route path="/rgt" element={<AgenteNewnet />} />
                    <Route path="/rgt/:id" element={<AgenteNewnet />} />

                    {/* Heimdall */}
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/tabla" element={<Tabla />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}