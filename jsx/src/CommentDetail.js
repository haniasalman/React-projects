import React from 'react';
import faker from '@faker-js/faker';

const CommentDetail = props => {
    // here prop is the refrence object that is added to the child component so that it can use the proprty value that is added from 
    //the parent component 
    //prop here contains 4 objects and there values that will be displayed in the tag 
    return(
        <div className="comment">
    <a className="avatar">
      <img src={faker.image.avatar()} alt="avatar"/>
    </a>
    <div className="content">
      <a className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.time}</span>
      </div>
      <div className="text">
        How artistic!
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
    );
};

export default CommentDetail;