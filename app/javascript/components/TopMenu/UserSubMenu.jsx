import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {log_out} from '../Auth/authmethods';
//const token = document.querySelector('meta[name="csrf-token"]').content;

const AuthLoggedSubMenu = () => {
  const [name, setName] = React.useState(localStorage.getItem("username"));
  //console.log('SubMenu userame in storage ', localStorage.getItem("username"))
  const navigate = useNavigate();
  
  function handleAuthLogout() {
    setName(log_out)
    navigate('/news');
  }

  if (localStorage.getItem("username") == 'guest' || localStorage.getItem("username") === undefined){
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { localStorage.getItem("username") }
      </a>
      <ul className="dropdown-menu dropdown-menu-end role" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/users/sign_in">Вход</Link></li>
        <li><Link className="dropdown-item" to="/">Регистрация</Link></li>
        <li><Link className="dropdown-item" to="/">Локализация</Link></li>
        <li><hr className="dropdown-divider" /></li>
      </ul>
    </li>
  );}
  else{
    return (
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { localStorage.getItem("username") }
      </a>
      <ul className="dropdown-menu dropdown-menu-end role" aria-labelledby="navbarDropdown">
        <li><NavLink className="dropdown-item" to="/user/">Профиль</NavLink></li>
        <li><Link className="dropdown-item" to="/">Локализация</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" onClick={handleAuthLogout} to="/">Выход</Link></li>
      </ul>
    </li>
    )
  }
}
export default AuthLoggedSubMenu;