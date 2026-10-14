import {siteUrl} from './site-url';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles.css';
import './cinematic.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
if('serviceWorker' in navigator && import.meta.env?.PROD) window.addEventListener('load',()=>navigator.serviceWorker.register(siteUrl('sw.js'),{scope:siteUrl()}).catch(()=>{}));
