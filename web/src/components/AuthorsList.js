import React from 'react';

const AuthorsList = (props) => {
  const { items } = props;

  return (
    <>
      <div>Authors</div>
      <select>
        {items.map((item, idx) => {
          return (
            <option key={idx} value={item.id}>
              {item.authors?.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default AuthorsList;
