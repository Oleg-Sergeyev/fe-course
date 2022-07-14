import App from './App';
import * as React from "react";
import { createRoot } from 'react-dom/client';

//const [name, setUserName] = React.useState('');
  const username = localStorage.getItem("username")
//   if (username){
//     if ( username == '' || username == 'Гость' ){
//       setUserName('Гость');
//     } else {
//       setUserName(username);
//     }
//   } else{
//     localStorage.setItem("username", 'Гость');
//   }
   
  
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" username={username}/>);
