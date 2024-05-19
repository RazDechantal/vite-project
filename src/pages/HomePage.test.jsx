// src/pages/HomePage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import { BlogProvider } from '../context/BlogContext';
import HomePage from './HomePage';

test('renders blog posts', () => {
  render(
    <Router>
      <UserProvider>
        <BlogProvider>
          <HomePage />
        </BlogProvider>
      </UserProvider>
    </Router>
  );

  expect(screen.getByText(/Blog Posts/i)).toBeInTheDocument();
});
