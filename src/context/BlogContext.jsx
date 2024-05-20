// src/context/BlogContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const postSnapshot = await getDocs(postsCollection);
        const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (title, text, author) => {
    try {
      const newPost = {
        title,
        text,
        author,
        comments: [],
      };
      const docRef = await addDoc(collection(db, 'posts'), newPost);
      setPosts([...posts, { id: docRef.id, ...newPost }]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (id, title, text) => {
    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, { title, text });
      setPosts(posts.map(post => (post.id === id ? { ...post, title, text } : post)));
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      const postRef = doc(db, 'posts', id);
      await deleteDoc(postRef);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const addComment = async (postId, username, text) => {
    try {
      const postRef = doc(db, 'posts', postId);
      const post = posts.find(post => post.id === postId);
      const updatedPost = { ...post, comments: [...post.comments, { username, text }] };
      await updateDoc(postRef, { comments: updatedPost.comments });
      setPosts(posts.map(post => (post.id === postId ? updatedPost : post)));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
