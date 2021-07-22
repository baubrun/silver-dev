/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { postApi } from '../api/post';
import PostList from './PostList';
import AuthorsList from './AuthorsList';

const ListContainer = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const postRes = await postApi(selectedAuthor);
      setPosts(postRes);
    } catch (err) {
      const errMsg = err.response ? err.response.data : err.message;
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
    return (
      <>
        <h1>Error</h1>
        <div>{error}</div>
      </>
    );
  }
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div className="row">
      <div className="column">
        <PostList items={posts} onClick={setSelectedItem} />
      </div>
      <div className="column">
        <AuthorsList items={posts} onSelect={setSelectedAuthor} />
      </div>
    </div>
  );
};

export default ListContainer;
