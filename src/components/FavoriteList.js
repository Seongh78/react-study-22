import React from 'react';

const FavoriteList = ({ users, onClick }) => {
  /**
   * 유저목록 뷰
   * --
   */
  const div =
    users.length < 1 ? (
      <h1>No data...</h1>
    ) : (
      users.map((item) => (
        <div key={`user_${item.id}`}>
          {item.name}
          {item.isSelect === false ? (
            <button onClick={() => onClick(item.id)}>선택</button>
          ) : (
            <button
              style={{ background: 'red', color: 'white' }}
              onClick={() => onClick(item.id)}
            >
              선택해제
            </button>
          )}
        </div>
      ))
    );

  /**
   * RENDER
   */
  return div;
};

FavoriteList.defaultProps = {
  users: [],
  onClick: () => {},
};

export default FavoriteList;
