import * as React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from "react-router-dom";
//import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import contentParser from 'html-react-parser';

const TopMenu = () => {

  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">/ NEWS </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Гость
              </a>
              <ul className="dropdown-menu dropdown-menu-end role" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Вход</Link></li>
                <li><Link className="dropdown-item" to="/">Регистрация</Link></li>
                <li><Link className="dropdown-item" to="/">Локализация</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Выход</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </Nav>
  );
};
export default TopMenu;