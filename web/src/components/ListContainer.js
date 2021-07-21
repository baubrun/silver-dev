import React, { useState, useEffect } from 'react';
import { postApi } from '../api/post';
import PostList from './PostList';
import AuthorsList from './AuthorsList';

const ListContainer = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = React.useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const postRes = await postApi();
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

  const onSelectItem = (id) => {
    setSelectedId(id);
  };

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
        <PostList
          items={posts}
          onClick={onSelectItem}
          selectedId={selectedId}
        />
      </div>
      <div className="column">
        <AuthorsList items={posts} />
      </div>
    </div>
  );
};

export default ListContainer;
