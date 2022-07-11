import * as React from 'react';
import { Card } from 'react-bootstrap';
import NewAuthForm from './NewAuthForm'
import { useParams } from 'react-router-dom';

 const NewAuth = () => {
//   const { id } = useParams();
//   const [header, setHeader] = React.useState('None');
//   const [body, setBody] = React.useState('Empty');
//   const [source, setSource] = React.useState('Empty');
//     React.useEffect(() => {
//       fetch(`/news/${id}.json`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//       .then(response => response.json())
//       .then(data => {
//         setHeader(data.header);
//         setBody(data.body.body || 'Empty');
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//       console.error('Error:', error);
//       });
//   }, []);

return (
    <div className="container">
      <div className="commentBox panel panel-default">
        <div className="panel-body">
          <h1>Авторизация</h1>
          <br />
          <NewAuthForm ></NewAuthForm>
          {/* <NewAuthForm onCommentSubmit={this.handleCommentSubmit.bind(this)} /> */}
        </div>
      </div>
    </div>
  );
};
export default NewAuth;