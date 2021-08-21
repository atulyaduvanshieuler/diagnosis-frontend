import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import Routes, {RenderRoutes} from "./routing";
import '/src/stylesheet.css';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
			<RenderRoutes routes={Routes}/>
		</BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
)
