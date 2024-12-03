import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ todo, handleDelete, handleUpdate }) => {
  return (
    <div className='TodoList'>
      <h4> Todo List 🌞</h4>
      <input className='searchbar' placeholder='검색어를 입력하세요' />
      <div className='list_wrapper'>
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
