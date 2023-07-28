import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.js';

ReactDOM.render(
    <GoogleOAuthProvider clientId="734319102257-p5k74dikmh4h8r342n86k804o464dcr8.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);