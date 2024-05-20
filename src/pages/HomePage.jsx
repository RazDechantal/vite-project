// src/pages/HomePage.jsx
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogPostList from '../components/BlogPostList';

const HomePage = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default HomePage;
