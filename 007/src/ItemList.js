const ItemList = (props) => {
  // likes = [ '송수빈', '김솔', ' 이효진' ]
  // 송수빈 => <li>송수빈</li>
  // 김솔 => <li>김솔</li>
  // 이효진 => <li>이효진</li>
  return (
    <div>
      {props.likes.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default ItemList;
