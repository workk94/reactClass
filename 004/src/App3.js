
import "./App3.css";
import  {useState} from 'react';
function App3(){


     const  [count, setCount] =  useState(1);



     //
     const handleOnClick1 =()=>{
         //alert("dkfdfjkdf");
         //state변수의 값을 바꾸자

         setCount( count +1);


     }

      //
      const handleOnClick10 =()=>{
        //alert("dkfdfjkdf");
        //state변수의 값을 바꾸자

        setCount( count +10);


    }


    const handleOnClick1_1  =()=>{
        setCount( count -1);

    }

    const handleOnClick1_10  = ()=>{

        setCount( count-10);
    }
 

    return(
        <div  className="App3">

            <h3> Simple counter</h3>
            <section>
                <h4>현재카운트</h4>
                <h4>{count}</h4>
            </section>

            <section>
                <button onClick= {handleOnClick1}>+1</button>
                <button onClick={ handleOnClick10}>+10</button>
                <button  onClick={ handleOnClick1_1}>-1</button>
                <button  onClick={handleOnClick1_10}>-10</button>
            </section>
            
        </div>
    );

}


export default App3;