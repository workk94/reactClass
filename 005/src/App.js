
import './App.css';


import ItemList from './ItemList';
import ItemList2 from './ItemList2';
function App() {


  let likes=[ "딸기"  ,"커피" , "산책"];



  return (
    <div className="App">
      <ItemList   likes={likes} /> 
      <ItemList2  likes={likes}/>

    </div>
  );
}

export default App;
