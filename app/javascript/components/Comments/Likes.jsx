import * as React from 'react';
import { Link } from "react-router-dom";

const Likes = (props) => {
  //const heartContainer = React.useRef(null);
  const [count, setCount] = React.useState(props.likes);
  const [state_heart, setSateHeart] = React.useState(setHeart(props.heart));

 
  let token = window.localStorage.getItem("token");

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
        news_id: props.news_id
      })
    })
    .then(response => response.json())
      .then(data => {
        //console.log('DATA: ', data);
        setCount(data.simple_rating);
        setSateHeart(setHeart(data.heart))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function setHeart(num){
    if (num == 0){
      return <Link onClick={handleClick} to="" ><i key={props.news_id} className='bx bx-heart'/></Link>
    }else{
      return <Link onClick={handleClick} to="" ><i key={props.news_id} className='bx bx-heart bxs-heart heart-like'/></Link>
    }
  }
  return (
    <span className='heart-news'>
      { count }{ state_heart }
    </span>
  );
};
export default Likes;