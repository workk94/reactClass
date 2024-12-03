import './Item.css';

//배열의 아이템 정보 한개를 반환하는 컴포넌트
const Item = ({ it }) => {
  return (
    <div className='Item'>
      <div className='col1'>이름</div>
      <div className='col2'>{it}</div>
    </div>
  );
};

export default Item;
