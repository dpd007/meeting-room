import Booking from "./components/Booking";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setUser] = useState([]);
  const handleUser = (data) => {
    setUser(data);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login userLoggedIn={handleUser} />} />
        <Route path="/dashboard" element={<Booking user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
