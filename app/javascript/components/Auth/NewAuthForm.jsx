import * as React from 'react';
import { Button } from 'react-bootstrap'
import MessageError from './AuthErorr';
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
    const user = {  
      "user": {
          "username": email,
          "email": email,
          "password": password,
          "password_confirmation": password
        }
      }
    handleAuthSubmit(user);
  };

  function handleAuthSubmit(user) {
    fetch('/api/v1/sign_in', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      // .then(response => { if (!response.ok) { throw new Error(`HTTP error ${response.status}`); }
      //     navigate('/')
      // }) // Note: No `catch` h
      .then(response => response.json())
      .then(response => { 
        if (response.error) {
          //throw new Error(`HTTP error ${response.status}`);
          setText(response.error)
        }
        else {
          navigate('/');
        }
      })
      // .then((data) => {
      // console.log(`data ${data}`);
      // //navigate('/');
      // })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return(
    <div>
      <MessageError text={text_erorr} />
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
};
export default NewAuthForm;