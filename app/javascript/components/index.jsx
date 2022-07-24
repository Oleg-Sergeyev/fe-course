import App from './App';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { get_current_user } from './Auth/authmethods'

get_current_user();
//console.log('Start app, username:', localStorage.getItem("username"))
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
