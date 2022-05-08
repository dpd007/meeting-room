import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Button from "./UI/Button";
const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];
const Booking = () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
    // console.log(newDate);
  };
  return (
    <div className="container w-50">
      <h2 className="text-center">Meeting Room Booking</h2>
      <form>
        <div className="form-floating mb-3">
          <select name="meeting__room__select" id="" className="form-control">
            <option value="Training Room">Training Room</option>
            <option value="xyz">xyz</option>
            <option value="xyz2">xyz2</option>
          </select>
          <label htmlFor="meeting__room__select">Meeting room</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            placeholder="Enter meeting description"
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={date} locale={"en-US"} />
          {/* <input type="date" className="form-control" value={date} onChange={getDate} /> */}
        </div>
        {times.map((time, index) => {
          return <Button key={index} time={time} />;
        })}
        <Button formButton="true" />
      </form>
    </div>
  );
};

export default Booking;
