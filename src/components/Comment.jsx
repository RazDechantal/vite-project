import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p className="username">{comment.username}</p>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
