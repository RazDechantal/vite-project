// src/components/Comment.jsx
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p><strong>{comment.username}</strong>: {comment.text}</p>
    </div>
  );
};

export default Comment;
