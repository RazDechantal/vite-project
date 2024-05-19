// src/components/BlogPostList.js
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogPost from './BlogPost';

const BlogPostList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
