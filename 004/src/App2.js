


//회원정보를 객체형태로 관리하자 !! 
//객체형태의 정보를 관리할 수 있는  state만들기 

import {useState} from 'react';
function App2(){

    const [ data,  setData] = useState( {
        id:"",
        name:"",
        pw:""

    }  );   // ( ) => 괗호 안의 값이 state변수의 초기값



    const handleOnChage =( e)=>{

        //alert("dfkdfjkdfjd");

        setData( {
            ...data,
            [e.target.name] : e.target.value       // pw: 'dfdfdfd'
        }); 
    }


    //
    const handleReg =()=>{
        alert("등록합니다");
        alert( data.id);
        alert( data.name);
        alert( data.pw);


        //
        setData({

            id:"",
            name:"",
            pw:""
        });


        /*

        data={
          id:'acorn',
          name:' 우주연',
          pw: '1234'
        
        }

        */

    }


    return(
        <div>  
            <h2>회원가입</h2>          
            <input  type="text" name="id"    onChange={handleOnChage}  value={data.id} /> <br/>
            <input  type="text" name="name" onChange={handleOnChage} value={data.name}/> <br/>
            <input  type="text" name="pw"  onChange={handleOnChage} value={data.pw}/> <br/>
            <button  onClick={handleReg}>등록</button>
        </div>
        

    );

}

export default App2;