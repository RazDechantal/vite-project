import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { BlogProvider } from './context/BlogContext';
import HomePage from './pages/HomePage';
import MyPostsPage from './pages/MyPostsPage';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <BlogProvider>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/myposts">My Posts</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/myposts" component={MyPostsPage} />
          </Switch>
        </BlogProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
