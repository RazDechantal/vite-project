// src/context/BlogContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postList);
    };

    fetchPosts();
  }, []);

  const addPost = async (title, text, author) => {
    const newPost = {
      title,
      text,
      author,
      comments: [],
    };
    const docRef = await addDoc(collection(db, 'posts'), newPost);
    setPosts([...posts, { id: docRef.id, ...newPost }]);
  };

  const updatePost = async (id, title, text) => {
    const postRef = doc(db, 'posts', id);
    await updateDoc(postRef, { title, text });
    setPosts(posts.map(post => (post.id === id ? { ...post, title, text } : post)));
  };

  const deletePost = async (id) => {
    const postRef = doc(db, 'posts', id);
    await deleteDoc(postRef);
    setPosts(posts.filter(post => post.id !== id));
  };

  const addComment = async (postId, username, text) => {
    const postRef = doc(db, 'posts', postId);
    const post = posts.find(post => post.id === postId);
    const updatedPost = { ...post, comments: [...post.comments, { username, text }] };
    await updateDoc(postRef, { comments: updatedPost.comments });
    setPosts(posts.map(post => (post.id === postId ? updatedPost : post)));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
