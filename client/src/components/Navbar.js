import "./css/Navbar.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Slices/AuthSlice";
const Navbar = ({ name }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("clicked");
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid justify-content-spaceBetween">
        <label className="text-light h5">Hello, {name}</label>
        <button className="btn button" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
