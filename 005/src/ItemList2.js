import Item from './Item';

const ItemList2 = ({ likes }) => {
  return (
    <div>
      {likes.map((item, index) => (
        <Item key={index} it={item} />
      ))}
    </div>
  );
};

export default ItemList2;
