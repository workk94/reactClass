import { useContext } from 'react';
import { LikesContext } from './App8';

const ItemList2 = () => {
  const likes = useContext(LikesContext);

  return (
    <div>
      {likes.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default ItemList2;
