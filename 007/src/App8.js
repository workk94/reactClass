import ItemList2 from './ItemList2';
import { createContext } from 'react';

export const LikesContext = createContext();

function App8() {
  let likes = ['딸기', '사과', '카레', '복숭아'];
  return (
    <LikesContext.Provider value={likes}>
      <div>
        <ItemList2 />
      </div>
    </LikesContext.Provider>
  );
}

export default App8;
