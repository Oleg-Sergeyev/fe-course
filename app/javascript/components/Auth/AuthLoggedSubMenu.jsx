import * as React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const token = document.querySelector('meta[name="csrf-token"]').content;

const AuthLoggedSubMenu = (props) => {
  const [name, setName] = React.useState(props.name);
  const navigate = useNavigate();
  function handleAuthLogout() {
    fetch('/api/v1/sign_out', 
      { method: 'DELETE', 
        headers: {
          'X-CSRF-Token': token,
          'Content-Type': 'application/json'
        } 
      })
    //.then(() => this.setState({ status: 'Delete successful' }));
    setName('Гость');
    localStorage.setItem("username", 'Гость');
    navigate('/');
  }


  if (name != "Гость"){
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { name }
      </a>
      <ul className="dropdown-menu dropdown-menu-end role" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/">Локализация</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" onClick={handleAuthLogout} to="/">Выход</Link></li>
      </ul>
    </li>
  );}
  else{
    return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { name }
      </a>
      <ul className="dropdown-menu dropdown-menu-end role" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/users/sign_in">Вход</Link></li>
        <li><Link className="dropdown-item" to="/">Регистрация</Link></li>
        <li><Link className="dropdown-item" to="/">Локализация</Link></li>
        <li><hr className="dropdown-divider" /></li>
      </ul>
    </li>
    )
  }
}
export default AuthLoggedSubMenu;