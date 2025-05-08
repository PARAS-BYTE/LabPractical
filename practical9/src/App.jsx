import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import PostList from './pages/PostList';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Navbar from './pages/NavBar';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is my first blog post!' },
    { id: 2, title: 'React Tips', content: 'Here are some React tips I learned.' }
  ]);

  const addPost = (post) => {
    const id = Date.now();
    setPosts([...posts, { ...post, id }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/posts" 
          element={<PostList posts={posts} deletePost={deletePost} />} 
        />
        <Route 
          path="/add-post" 
          element={<AddPost addPost={addPost} />} 
        />
        <Route 
          path="/edit-post/:id" 
          element={<EditPost posts={posts} updatePost={updatePost} />} 
        />
      </Routes>
    </div>
  );
}

export default App;