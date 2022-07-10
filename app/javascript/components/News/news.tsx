import * as React from 'react';
import { Card } from 'react-bootstrap';
//import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import contentParser from 'html-react-parser';

const News = () => {
  const { id } = useParams();
  const [header, setHeader] = React.useState('None');
  const [body, setBody] = React.useState('Empty');
  const [source, setSource] = React.useState('Empty');
    React.useEffect(() => {
      fetch(`/news/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        setHeader(data.header);
        setBody(data.body.body || 'Empty');
        console.log('Success:', data);
      })
      .catch((error) => {
      console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <Card className='text-center'>
        <Card.Header>
          <div> {header} </div>
        </Card.Header>
        <Card.Body>
          {contentParser(body)}
        </Card.Body>
        {/* <Card.Footer className='text-muted'>
          <CommentBox url='/api/v1/comments' post_id={id} />
        </Card.Footer> */}
      </Card>
    </div>
  );
};
export default News;