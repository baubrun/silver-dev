import React, { useEffect, useState } from 'react';
import { sorter } from '../helpers';
import moment from 'moment';

const PostList = (props) => {
  const [postItems, setPostItems] = useState([]);
  const { items, onClick } = props;

  useEffect(() => {
    const sortedAuthors = sorter(items, 'publishedAt', 'desc');
    setPostItems(sortedAuthors);
  }, [items]);

  if (postItems.length < 1) {
    return <div>No Authors</div>;
  }
  const handleListItemClick = (id) => {
    onClick(id);
  };

  const ListItems = ({ item }) => {
    return (
      <div>
        <div className="title" onClick={() => handleListItemClick(item?.id)}>
          <h2>Title: {`${item?.title}`}</h2>
        </div>
        <ul>
          <li>Summary: {`${item?.body.split('\n\n')[0]} ...`}</li>
          <li>Author: {`${item.author?.name}`}</li>
          <li>
            published:{' '}
            {`${moment(item?.publishedAt).format('DD MMMM YYYY, hh:mm a')}`}
          </li>
        </ul>
      </div>
    );
  };

  return postItems?.map((item, idx) => {
    return <ListItems key={idx} item={item} />;
  });
};

export default PostList;
