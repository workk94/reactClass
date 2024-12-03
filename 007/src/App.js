import React, { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // JSON Server에서 데이터 가져오기
    fetch('http://localhost:8080/api/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.posts);

        setPosts(data.posts); // 상태에 데이터 저장
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default App;
