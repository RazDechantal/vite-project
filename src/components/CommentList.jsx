// src/components/CommentList.jsx
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments = [] }) => {
  return (
    <div>
      {Array.isArray(comments) ? (
        comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default CommentList;
