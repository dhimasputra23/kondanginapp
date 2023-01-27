import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./Silver/About";

function MyApp() {
    return (
        <Routes>
            <Route path="/" element={<Home /> } />

        </Routes>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}