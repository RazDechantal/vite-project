// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import HomePage from './pages/HomePage';
import MyPostsPage from './pages/MyPostsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AddPostPage from './pages/AddPostPage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <BlogProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myposts" element={
                <PrivateRoute>
                  <MyPostsPage />
                </PrivateRoute>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/addpost" element={
                <PrivateRoute>
                  <AddPostPage />
                </PrivateRoute>
              } />
            </Routes>
          </div>
        </BlogProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
