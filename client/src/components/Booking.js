import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Button from "./UI/Button";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./css/Booking.css";
import axios from "axios";
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
const Booking = ({ user }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [date, setDate] = useState(new Date());
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timing, setTiming] = useState([]);
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let newDate = day + "/" + month + "/" + year;
    let formData = {
      employeeId: user.id,
      name: name,
      description: description,
      typeofroom: room,
      date: newDate,
      starttime: timing,
    };
    sendData(formData);
    // console.log(formData);
  };
  const handleTiming = (time) => {
    setTiming((prevTime) => {
      return [...prevTime, time];
    });
  };
  const sendData = (data) => {
    axios
      .post("http://localhost:3001/create-booking", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Inserted Successfully!!");
          setDate(new Date());
          setRoom("");
          setName("");
          setDescription("");
          setTiming([]);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
  };
  if (isAuth === false) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <div className="container-fluid booking__container">
        <Navbar name={user.employeeName} />
        <div className="container w-50">
          <h2 className="text-center">Meeting Room Booking</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <select
                name="meeting__room__select"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="form-control"
              >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                placeholder="Enter meeting description"
              />
              <label htmlFor="description">Description</label>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <Calendar
                onChange={handleDateChange}
                value={date}
                locale={"en-US"}
              />
            </div>
            {times.map((time, index) => {
              return (
                <Button key={index} time={time} onSelectTime={handleTiming} />
              );
            })}
            <button
              className="btn w-100 text-capitalize m-2 bg-danger text-light button"
              type="submit"
            >
              book an appointment
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Booking;
