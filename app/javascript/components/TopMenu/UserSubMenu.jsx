import * as React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import CurrentUser from './CurrentUser';
import {log_out} from '../Auth/authmethods';
const token = document.querySelector('meta[name="csrf-token"]').content;

const AuthLoggedSubMenu = (props) => {
  const [name, setName] = React.useState(props.name);
  const navigate = useNavigate();
  
  // React.useEffect(() => {
  // console.log('From useEffect Name')
  // function checkUserData() {
  //   const name = localStorage.getItem('username')
  //   console.log('From useEffect Name ', name)
  //     if (item) {
  //       setName(name)
  //     }
  //   }
  // window.addEventListener('storage', checkUserData)
    
  // return () => {
  //   window.removeEventListener('storage', checkUserData)
  // }
  //   // const name = localStorage.getItem('username');
  //   // console.log('From useEffect Name ', name)
  //   // if (name) {
  //   //   setName(name);
  //   // }
  // }, [name])

  function handleAuthLogout() {
    //log_out.username;
    setName(log_out)
    console.log('Name after logout ', name)
    navigate('/');
  }

  // useEffect(() => {
  //   fetchData();
  // }, [data]);




  if (name != 'guest' || name != null){
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { name }
      </a>
      {/* <CurrentUser name={props.name}/> */}
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
      {/* <CurrentUser name={props.name}/> */}
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