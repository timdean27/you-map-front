import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
// --activated = map is gone, but had this in other project
import 'mapbox-gl/dist/mapbox-gl.css'  
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    <Auth0Provider 
        domain='dev-lczzupgvqpiatsmy.us.auth0.com'
        clientId='YyJiZwGAlbe0yusYNmmexwrlkM08q6wL'
        authorizationParams={{
            redirect_uri:window.location.origin
        }}>
            <App />
    </Auth0Provider>
);

{/* </BrowserRouter> */}