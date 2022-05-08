const Button = ({ time, formButton, formText, onSelectTime, selected }) => {
  let button;
  const handleClick = (time) => {
    onSelectTime(time);
  };
  if (formButton) {
    button = (
      <button
        className="btn w-100 text-capitalize m-2 bg-danger text-light button"
        type="submit"
      >
        {formText}
      </button>
    );
  } else {
    // let newTime;
    // let hrs = time.split(":")[0];
    // let mins = time.split(":")[1];
    // if (hrs < 12) {
    //   let newtime = [hrs, mins].join(":");
    //   newTime = newtime;
    //   button = (
    //     <button
    //       className={`btn btn-outline-danger m-2 ${selected ? selected : ""}`}
    //       onClick={() => {
    //         handleClick(newTime);
    //       }}
    //     >
    //       {newTime + "A.M."}
    //     </button>
    //   );
    // } else {
    //   let newHrs = hrs - 12;
    //   if (newHrs === 0) {
    //     newHrs = 12;
    //   }
    //   let newtime = [newHrs, mins].join(":");
    //   newTime = newtime;
    //   button = (
    //     <button
    //       className={`btn btn-outline-danger m-2 ${selected ? selected : ""}`}
    //       onClick={() => {
    //         handleClick(newTime);
    //       }}
    //     >
    //       {newTime + "P.M."}
    //     </button>
    //   );
    // }
    button = (
      <button
        className={`btn btn-outline-danger m-2 ${selected ? "selected" : ""}`}
        onClick={() => {
          handleClick(time);
        }}
      >
        {time}
      </button>
    );
  }

  return button;
};

export default Button;
