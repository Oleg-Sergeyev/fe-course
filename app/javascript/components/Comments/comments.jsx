import { htmlToDOM } from 'html-react-parser';
import React from 'react'
import Comment from './comment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentNodes = this.state.comments.map((comment, index) => {
      return (<Comment key={index} author={comment.author}>
      {comment.text}
      </Comment>);
    });
    return (<div className="commentList">{commentNodes}</div>);
  }
}
export default Comments;