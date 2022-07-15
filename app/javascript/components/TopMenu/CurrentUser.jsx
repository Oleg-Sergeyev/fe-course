import * as React from 'react';

const CurrentUser = (props) => {
  const [user, setUser] = React.useState();
  setUser(props)
  return (
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      { user }
    </a>
  );
};
export default CurrentUser;