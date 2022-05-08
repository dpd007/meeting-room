import "./css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid justify-content-end">
        <button className="btn button" type="button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
