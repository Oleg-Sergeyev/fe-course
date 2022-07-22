import * as React from 'react';
import { Card } from 'react-bootstrap';
import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Likes from "../Comments/Likes";
import contentParser from 'html-react-parser';


const News = () => {
  const { id } = useParams();
  
  function setProps(id) {  
    let all_news = localStorage.getItem("AllNews");
    //console.log('all_news::', JSON.parse(all_news));
    let res = {}
    JSON.parse(all_news).forEach(element => {
      console.log('element:', element);
      if (element.id == id)
        { 
          res =  {"rating": element.simple_rating, "heart": element.heart}
        }
    });
    return res;
  }
  let json_rating = setProps(id);
  const [rating, setRating] = React.useState(json_rating.rating); 
  const [heart, setHeart] = React.useState(json_rating.heart);
  const [header, setHeader] = React.useState('None');
  const [body, setBody] = React.useState('Empty');
  //const [source, setSource] = React.useState('Empty');
    React.useEffect(() => {
      fetch(`/news/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data :::', data);
        setRating(data.simple_rating);
        setHeart(data.heart);
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
          <div className='d-flex justify-content-evenly'> {header} <Likes likes={rating} news_id={id} heart={heart} heart_visible={true}/></div>
        </Card.Header>
        <Card.Body>
          {contentParser(body)}
        </Card.Body>
        <Card.Footer className='text-muted'>
          <CommentBox url='/api/v1/comments' news_id={id} />
        </Card.Footer>
      </Card>
      <div className="d-flex justify-content-center bg-white back">
        <Link className="link-secondary" to="/news">Назад</Link>
      </div>
    </div>
  );
};
export default News;