// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  // Function to get alias from email
  const getAlias = (email) => {
    return email ? email.split('@')[0] : '';
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      {currentUser && <Link to="/myposts" style={styles.link}>My Posts</Link>}
      {currentUser ? (
        <>
          <span style={styles.userInfo}>{getAlias(currentUser.email)}</span>
          <Link to="/addpost" style={styles.link}>Add Post</Link>
          <button onClick={logout} style={styles.button}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 1rem'
  },
  userInfo: {
    color: '#fff',
    marginRight: '1rem'
  },
  button: {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  }
};

export default Navbar;
