import React, { useEffect, useState } from 'react';

const AuthorsList = (props) => {
  const { items, onSelect } = props;
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      const unique = [...new Set(items.map((i) => i.author?.name))];
      setAuthors(unique);
    }
  }, [items]);

  return (
    <>
      <div>Authors</div>
      <select onChange={(evt) => onSelect(evt.target.value)}>
        <option value={''} />
        {authors?.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default AuthorsList;
