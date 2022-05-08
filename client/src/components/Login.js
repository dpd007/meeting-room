import "./css/Login.css";
import Button from "./UI/Button";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/Slices/AuthSlice";
import { Navigate } from "react-router-dom";
const Login = ({ userLoggedIn }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  // const userData = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEmployee();
  };
  const loggedIn = () => {
    dispatch(authActions.login());
  };
  const fetchEmployee = () => {
    axios
      .post("http://localhost:3001/getEmployee", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          userLoggedIn(res.data[0]);
          loggedIn();
        }
      })
      .catch((err) => {
        if (err.response) {
          setIsError(err.response.data);
          alert("User " + isError);
        }
      });
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="container-fluid login__main">
      <div className="login__container">
        <h2 className="h3 text-center py-4">Sign In here for book a meeting</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating my-3">
            <input
              type="email"
              name="employee__mail"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail here.."
            />
            <label htmlFor="employee__mail">Email</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="password"
              name="employee__password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <label htmlFor="employee__password">Password</label>
          </div>
          <div className="my-3 d-flex justify-content-center">
            <Button formButton="true" formText="sign in" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
