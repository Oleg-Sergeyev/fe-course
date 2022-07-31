import * as React from 'react';
import { Card } from 'react-bootstrap';
import CommentBox from '../Comments/CommentBox'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import contentParser from 'html-react-parser';

localStorage.setItem("token", document.querySelector('meta[name="csrf-token"]').content);

const News = (props) => {
  let token = window.localStorage.getItem("token");
  const { id } = useParams();
  console.log('NEWS props.edit = ', props.edit)
  console.log('id = ', id)
  const [news, setNews] = React.useState({ 
    header: '', 
    body: '',
    rating: 0,
    heart: 0
  })

  function setData() {
      fetch(`/news/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Current news:', data);
        setNews({
          header: data.header, 
          body: data.body.body || 'Empty',
          rating: data.simple_rating,
          heart: data.heart
        })
      })
      .catch((error) => {
      console.error('Error:', error);
      });
  }

  React.useEffect(() => {
    setData();
  }, [])

  function setHeart(num){
    if (num === 0){
      return <Link onClick={handleClick} to="" ><i key={news.id} className='bx bx-heart'/></Link>
    }else{
      return <Link onClick={handleClick} to="" ><i key={news.id} className='bx bx-heart bxs-heart heart-like'/></Link>
    }
  }

  function handleClick() {
    let action = 1
    fetch('/simple_rating', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: action,
        news_id: id
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) { alert(data.error); }
        else{
          setNews({
            ...news,
            rating: data.simple_rating,
            heart: data.heart
          })
        }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  if (props.edit == true){
    return (
      <div className="container">
        <Card className='text-center'>
          <Card.Header>
            <div className='d-flex justify-content-evenly'> 
              {news.header} 
              <div className='d-flex justify-content-evenly news-show'>
                <span className=''>{news.rating}</span>
                <span className=''>{setHeart(news.heart)}</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            {contentParser(news.body)}
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Card className='text-center'>
          <Card.Header>
            <div className='d-flex justify-content-evenly'> 
              {news.header} 
              <div className='d-flex justify-content-evenly news-show'>
                <span className=''>{news.rating}</span>
                <span className=''>{setHeart(news.heart)}</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            {contentParser(news.body)}
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
  }
};
export default News;