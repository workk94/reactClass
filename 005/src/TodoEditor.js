import './TodoEditor.css';
import { useState } from 'react';

const TodoEditor = ({ handleReg }) => {
  const [text, setText] = useState('');
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const hanldeOnClick = () => {
    //사용자가 입력한 일정내용(content) text State 변수가 있음
    //
    alert(text);
    handleReg(text);
  };
  return (
    <div className='TodoEditor'>
      <h4>새로운 todo 작성하기🖊</h4>
      <div className='editor_wrapper'>
        <input placeholder='새로운 todo' onChange={handleOnChange} />
        <button onClick={hanldeOnClick}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
