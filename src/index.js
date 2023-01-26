import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
// --activated = map is gone, but had this in other project
import 'mapbox-gl/dist/mapbox-gl.css'  
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
