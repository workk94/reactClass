 
import './App.css';


//회원입력화면 만들고 입력정보를  state로 관리하자 !!
//회원정보 저장을 위한   state만들기 

import { useState} from 'react';

function App() {

  const [ id, setId] = useState( "");
  const [ name, setName] = useState( "");
  const [ pw, setPw] = useState( "");


  //이벤트핸들러함수는 이벤트객체를 제공받는다 
 const handleId =( e)=>{
 // console.log( e.target.value);
 //state 변수 변화시킨다  !!!( setState  함수를 이용해야지만 state변수의 값이 변화됨 )

  setId(  e.target.value);
 }


  //

const handleName  =( e)=>{

 // console.log( e.target.value);
 setName(e.target.value);
}


const handlePw  =(e)=>{
 // console.log(e.target.value);
 setPw(e.target.value);

}

//등록처리

const handleReg =()=>{

  alert("등록합니다");
  //
  alert(id );
  alert(name);
  alert(pw);


  setId("");
  setName("");
  setPw("");

}

  return (
    <div className="App">

    <input  type="text" name="id"   onChange={ handleId}   value={id}/> <br/>
    <input  type="text" name="name" onChange={ handleName} value={name}/> <br/>
    <input  type="text" name="pw"   onChange={ handlePw} value={pw}/> <br/>

    <button onClick={handleReg}> 등록</button>
 
    </div>
  );
}

export default App;
