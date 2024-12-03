 
 import {useState , useRef } from 'react';

 function App3(){

    const [text, setText]  = useState("");

   const  textRef = useRef();


    //dom요소를 접근할 때 useRef 사용
    const handleOnClick =()=>{


        alert("dfkdjfdk");

        //유효성 
        if(text.length <5 ){
            alert("자리수를 채우세요");
            textRef.current.focus();
        }



    }

    return(
    <div>

      <input type="text"  ref={textRef} onChange={ (e)=>{
            setText(e.target.value);

      }} />
      <button onClick={handleOnClick}>등록</button>
    </div>

    );
 }


 export default App3;
