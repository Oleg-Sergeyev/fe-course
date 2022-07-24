import * as React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from "react-router-dom";
import AuthLoggedSubMenu from './UserSubMenu';

const TopMenu = () => {
  //console.log('TOP-MENU render')
  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">/ NEWS </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <AuthLoggedSubMenu />
          </ul>
        </div>
      </div>
    </Nav>
  );
};
export default TopMenu;