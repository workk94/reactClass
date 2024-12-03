import { useParams } from 'react-router-dom';

//param 값을 가져오기
const Contact = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      Contact!!
      <br />
      {id}
    </div>
  );
};

export default Contact;
