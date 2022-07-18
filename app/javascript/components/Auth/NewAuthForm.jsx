import * as React from 'react';
import { Button } from 'react-bootstrap'
import AuthMessage from './AuthMessage';
import { log_in } from './authmethods'
import { useNavigate } from 'react-router-dom';

const NewAuthForm = () => {
  const navigate = useNavigate();
  const [text_erorr, setText] = React.useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    if(!email || !password) {
      alert("Please input email/password");
      return;
    }
    const data = {  
      "user": {
          "username": email,
          "email": email,
          "password": password,
          "password_confirmation": password
        }
      }
    log_in(data);
    localStorage.clear;
    localStorage.setItem("username", data.user.username);
    localStorage.setItem("token", document.querySelector('meta[name="csrf-token"]').content);
    navigate('/');
  };

  if (localStorage.getItem('username') == 'guest' || localStorage.getItem('username') === undefined)
  {
    return(
      <div>
        <AuthMessage text={text_erorr} />
        <form className="form" onSubmit={event => handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="current-email"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="current-password"></input>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <Button className="btn btn-default" type="submit" > Submit </Button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};
export default NewAuthForm;