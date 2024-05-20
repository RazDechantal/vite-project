// src/pages/AddPostPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BlogContext } from '../context/BlogContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { currentUser } = useAuth();
  const { addPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost(title, text, currentUser.email);
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to add post: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostPage;
