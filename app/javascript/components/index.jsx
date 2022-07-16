import App from './App';
import * as React from "react";
import { createRoot } from 'react-dom/client';

let user_name = localStorage.getItem("username")
if (user_name === undefined){
  user_name = 'guest'
  localStorage.setItem("username", user_name);
}
console.log('Start app, username:', user_name)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
