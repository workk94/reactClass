const ItemList = ({ likes }) => {
  return (
    <div>
      <h2>Item List .. 좋아하는 거</h2>

      {likes.map((item) => (
        <div> {item} </div>
      ))}
    </div>
  );
};

export default ItemList;
