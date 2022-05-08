const Button = ({ time, onSelectTime, selected }) => {
  let button;
  const handleClick = (time) => {
    onSelectTime(time);
  };
  button = (
    <button
      className={`btn btn-outline-danger m-2 ${selected ? "selected" : ""}`}
      onClick={() => {
        handleClick(time);
      }}
      type="button"
    >
      {time}
    </button>
  );

  return button;
};

export default Button;
