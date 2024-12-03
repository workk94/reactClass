
      
import './App2.css';
import Header from './Header';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';


import {useState}  from  'react';

function App2() { 


    
    const mockTodo = [
        {
            id:0,
            isDone:false,
            title: "react 공부하기",
            createDate :  new Date().getTime()
        },
        {
            id:1,
            isDone:true,
            title: "오므라이스 만들기 ",
            createDate :  new Date().getTime()
        },
        {
            id:2,
            isDone:false,
            title: "옷장 정리",
            createDate :  new Date().getTime()
        }
        
    ];

 
    //일정 state 만들기
    const [todo , setTodo] = useState( mockTodo);


    //일정등록하기 
    const handleReg =(  content )=>{

        alert( "등록내용" +content );

        //일정정보 json객체 만들기
        const newItem={
            id:3 ,
            title: content ,
            isDone:false,
            createDate : new Date().getTime()
        }


        //등록한 일정정보를 전체일정정보에  setTodo를  호출해서 변화시키자 !!

        //
        setTodo( [ 
            newItem, 
            ...todo
        ]  );

        //state =>변화되면  화면이 다시 그려진다.
    }


    //삭제하기 


     const handleDelete =( targetId)=>{

        alert( targetId +"삭제한다");


        //todo  state변수 변화시켜야 한다 ( targetId를 제외한 목록 만들기)
        setTodo(  todo.filter(  it  =>  it.id !==targetId) );



     }



    //수정하기, 일정item 수정하기 ( isDone =>false, true)

    const handleUpdate =( targetId)=>{


        alert(targetId  +"수정한다");

        setTodo(  todo.map(  (it)=> it.id===targetId? {...it, isDone: !it.isDone}   : it ));


    }

    /*




     let it={
     
         id: 1,
         isDone: false,
         title: '옷장저리',
         crateDate: '2024-11-27'
     }

      let b ={
        ...it ,

         isDone : !it.isDone
      
      }


      let  ={
         
      id : it.idm
      isDone : it.Done,
      title : it.title
      createDate : it.creatDate
      
      }
    */



    
  return (
    <div className="App2">
      <Header/>
      <TodoEditor  handleReg={handleReg}/>
      <TodoList  todo={todo}  handleDelete={handleDelete} handleUpdate={handleUpdate} />    
    </div>
  );
}

export default App2;
