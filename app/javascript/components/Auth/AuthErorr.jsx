import * as React from 'react';

const AuthError = (props) => {
//   const { id } = useParams();
//  const [text, setText] = React.useState('');
// setText(props.text);
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
      { props.text }
    </div>
  );
};
export default AuthError;