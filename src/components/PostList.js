import React from 'react';

const PostList = ({ data }) => {
  /**
   * 유저목록 뷰
   * --
   */
  const div =
    data.length < 1 ? (
      <h5>No data...</h5>
    ) : (
      data.map((item) => <div key={`user_${item.id}`}>{item.title} </div>)
    );

  /**
   * RENDER
   */
  return <>{div}</>;
};

PostList.defaultProps = {
  data: [],
};

export default PostList;
