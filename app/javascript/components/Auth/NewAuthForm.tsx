import * as React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const NewAuthForm = () => {

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let text = e.target[0].value;
  //   if(!text) {
  //     alert("Please enter your comment");
  //     return;
  //   }
  //   this.props.onCommentSubmit({text:text});
  // }

  return (
    <form>
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
      <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
};
export default NewAuthForm;