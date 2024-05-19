import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', author: 'Jane Doe', text: 'This is the first post', comments: [] },
    { id: 2, title: 'Second Post', author: 'Jane Doe', text: 'This is the second post', comments: [] },
  ]);

  const addPost = (title, text, author) => {
    setPosts([...posts, { id: posts.length + 1, title, text, author, comments: [] }]);
  };

  const updatePost = (id, title, text) => {
    setPosts(posts.map(post => (post.id === id ? { ...post, title, text } : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const addComment = (postId, username, text) => {
    setPosts(posts.map(post => (post.id === postId ? { ...post, comments: [...post.comments, { username, text }] } : post)));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
