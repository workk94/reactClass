import React, { useState, useEffect } from 'react';

const App2 = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //  컴포넌트가 마운트되면  데이터 가져오기
  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // 데이터 등록하기
  const addPost = (e) => {
    e.preventDefault(); // 폼의 기본 동작 방지

    const newPost = { title, content };

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        // 성공적으로 등록된 데이터 화면에 추가
        setPosts((prevPosts) => [...prevPosts, data]);
        setTitle(''); // 입력 필드 초기화
        setContent('');
      })
      .catch((error) => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h1>Posts</h1>

      {/* 등록 폼 */}
      <form onSubmit={addPost}>
        <div>
          <label>Title:</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type='submit'> 등록하기</button>
      </form>

      {/* 등록된 데이터 표시 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App2;
