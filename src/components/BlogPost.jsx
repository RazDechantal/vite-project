// src/components/BlogPost.jsx
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import CommentList from './CommentList';

const BlogPost = ({ post }) => {
  const { currentUser } = useAuth();
  const { updatePost, deletePost, addComment } = useContext(BlogContext);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [commentText, setCommentText] = useState('');

  const handleUpdate = () => {
    updatePost(post.id, title, text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleAddComment = () => {
    if (currentUser) {
      addComment(post.id, currentUser.email, commentText);
      setCommentText('');
    } else {
      alert('You must be logged in to comment');
    }
  };

  return (
    <div className="blog-post">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p className="author">By {post.author}</p>
        </>
      )}
      {currentUser && currentUser.email === post.author && (
        <div className="actions">
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <div>
        <input value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment" />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <CommentList comments={post.comments || []} />
    </div>
  );
};

export default BlogPost;
