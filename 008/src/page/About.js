import { useNavigate } from 'react-router-dom';

const About = () => {
  const nav = useNavigate();

  const handleOnClick = () => {
    //console.log('safads');
    nav('/');
  };

  const handleOnClick2 = () => {
    // param 전달하기

    let num = 5;
    //nav('/contact/3');
    nav(`/contact/${num}`);
  };
  return (
    <div>
      About!! <br />
      <button onClick={handleOnClick}>home으로</button>
      <button onClick={handleOnClick2}>contact으로</button>
    </div>
  );
};

export default About;
