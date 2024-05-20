// src/pages/MyPostsPage.jsx
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import BlogPostList from '../components/BlogPostList';

const MyPostsPage = () => {
  const { currentUser } = useAuth();
  const { posts } = useContext(BlogContext);

  if (!currentUser) {
    return <p>You must be logged in to view your posts.</p>;
  }

  const userPosts = posts.filter(post => post.author === currentUser.email);

  return (
    <div>
      <h1>My Posts</h1>
      {userPosts.length > 0 ? (
        <BlogPostList posts={userPosts} />
      ) : (
        <p>You have no posts.</p>
      )}
    </div>
  );
};

export default MyPostsPage;
