import React from 'react';

const ProductList = ({ users, totalPrice, onClick }) => {
  /**
   * 유저목록 뷰
   * --
   */
  const div =
    users.length < 1 ? (
      <h5>No data...</h5>
    ) : (
      users.map((item) => (
        <div key={`user_${item.id}`}>
          {item.name}{' '}
          {item.isSelect === false ? (
            <button onClick={() => onClick(item.id)}>담기</button>
          ) : (
            <button
              style={{ background: 'red', color: 'white' }}
              onClick={() => onClick(item.id)}
            >
              담기해제
            </button>
          )}
        </div>
      ))
    );

  /**
   * RENDER
   */
  return (
    <>
      {div}
      {totalPrice === true && (
        <h3>총 합계: {users.reduce((acc, cur) => acc + cur.price, 0)}</h3>
      )}
    </>
  );
};

ProductList.defaultProps = {
  users: [],
  totalPrice: false,

  onClick: () => {},
};

export default ProductList;
