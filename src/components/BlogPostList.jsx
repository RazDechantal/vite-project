// src/components/BlogPostList.jsx
import React from 'react';
import BlogPost from './BlogPost';

const BlogPostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
