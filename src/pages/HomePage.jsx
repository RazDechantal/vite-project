// src/pages/HomePage.jsx
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import BlogPostList from '../components/BlogPostList';

const HomePage = () => {
  const { posts } = useContext(BlogContext);
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>All Blog Posts</h1>
      <BlogPostList posts={posts} />
      {!currentUser && <p>Please log in to add comments or create new posts.</p>}
    </div>
  );
};

export default HomePage;
