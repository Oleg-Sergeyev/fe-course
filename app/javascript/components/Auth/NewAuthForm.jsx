import * as React from 'react';
import { Button } from 'react-bootstrap'
import AuthMessage from './AuthMessage';
import UserSubMenu from '../TopMenu/UserSubMenu'
import { log_in } from './authmethods'
import { useNavigate } from 'react-router-dom';

const token = document.querySelector('meta[name="csrf-token"]').content;


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
    const message = log_in(data)
    console.log('message from log ', message);
    navigate('/');
    //return (< UserSubMenu name={ 'USER' } />) 
  };

  function handleAuthSubmit(data) {
    // fetch('/api/v1/sign_in', {
    //   method: 'POST',
    //   headers: {
    //     'X-CSRF-Token': token,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // })
    //   // .then(response => { if (!response.ok) { throw new Error(`HTTP error ${response.status}`); }
    //   //     navigate('/')
    //   // }) // Note: No `catch` h
    //   .then(response => response.json())
    //   .then(response => { 
    //     if (response.error) {
    //       //throw new Error(`HTTP error ${response.status}`);
    //       setText(response.error)
    //     }
    //     else {
    //       localStorage.setItem("username", data.user.username);
    //       //CurrentUser.setUser(data.user.username);
    //       // const loggedInUser = localStorage.getItem("username");
    //       // console.log('username', loggedInUser);
    //       navigate('/');
    //     }
    //   })
    //   // .then((data) => {
    //   // console.log(`data ${data}`);
    //   // //navigate('/');
    //   // })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }
  if (localStorage.getItem('username') == 'guest' || ocalStorage.getItem('username') == null)
  {
    return(
      <div>
        <AuthMessage text={text_erorr} />
        <form className="form" onSubmit={event => handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
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