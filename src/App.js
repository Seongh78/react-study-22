// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import PostList from './components/PostList';
import axios from 'axios';
const BASE_URL = `https://jsonplaceholder.typicode.com`;

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: '니트',
      age: 20,
      isSelect: false,
      price: 20000,
    },
    {
      id: 2,
      name: '가디건',
      age: 30,
      isSelect: false,
      price: 20000,
    },
    {
      id: 3,
      name: '청바지',
      age: 40,
      isSelect: false,
      price: 20000,
    },
  ]);

  /**
   * 선택/해제 감지 함수
   * --
   * @param {number} id
   */
  function handleClick(id) {
    const findId = users.findIndex((user) => id === user.id);
    setUsers([
      ...users.slice(0, findId),
      {
        ...users[findId],
        isSelect: !users[findId].isSelect,
      },
      ...users.slice(findId + 1),
    ]);
  }

  const filteredItems = users.filter((item) => item.isSelect);

  useEffect(() => {
    const call = () => {
      axios.get(`${BASE_URL}/posts`).then((res) => {
        setTimeout(() => {
          setPosts(res.data.slice(0, 15));
          setLoading(false);
        }, 500);
      });
    };
    call();
  }, []);

  /**
   * 뷰영역
   */
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>상품목록</h2>
          <ProductList users={users} onClick={handleClick} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>장바구니</h2>
          <ProductList users={filteredItems} onClick={handleClick} totalPrice />
        </div>
      </header>

      <header className="App-header">
        {loading === true ? 'Loading...' : <PostList data={posts} />}
      </header>
    </div>
  );
}

export default App;
