import './TodoItem.css';

const TodoItem = ({ item, handleDelete, handleUpdate }) => {
  const handleOnClick = () => {
    //alert('dfasdf');
    handleDelete(item.id);
  };

  const handleOnChange = (targetId) => {
    //alert('fsdf');
    handleUpdate(targetId);
  };
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input
          type='checkbox'
          checked={item.isDone}
          onChange={handleOnChange}
        />
      </div>
      <div className='title_col'> {item.title}</div>
      <div className='date_col'>
        {new Date(item.createDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={handleOnClick}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
