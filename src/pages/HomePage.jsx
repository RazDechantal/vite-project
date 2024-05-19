// src/pages/HomePage.js
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import BlogPostList from '../components/BlogPostList';

const HomePage = () => {
  const { currentUser } = useAuth();
  const { posts } = useContext(BlogContext);

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPostList posts={posts} />
      {currentUser && <p>Welcome, {currentUser.email}</p>}
    </div>
  );
};

export default HomePage;
