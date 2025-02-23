import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layout.jsx";


createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
);
