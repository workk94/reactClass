const Controller = ({ handleCount }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleCount(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleCount(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          handleCount(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          handleCount(-10);
        }}
      >
        -10
      </button>
    </div>
  );
};

export default Controller;
