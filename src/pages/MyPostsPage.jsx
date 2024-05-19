import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';
import BlogPost from '../components/BlogPost';

const MyPostsPage = () => {
  const { posts } = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const userPosts = posts.filter(post => post.author === user.name);

  return (
    <div>
      <h1>My Posts</h1>
      {userPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyPostsPage;
