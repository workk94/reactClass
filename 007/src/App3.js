import { useState } from 'react';
import { useEffect } from 'react';
function App3() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log('hi');
    fetch('http://localhost:3001/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h2>리스트</h2>
      <ul>
        {todo.map((item) => (
          <li> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App3;
