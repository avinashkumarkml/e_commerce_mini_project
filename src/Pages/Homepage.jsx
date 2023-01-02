import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate()
  const userName = JSON.parse(localStorage.getItem("user"));

  const data = useSelector((state) => state.products);
  console.log(data);

  const handleLogout = () => {
    localStorage.removeItem("loggedin")
    navigate("./login")
  }
  return (
    <>
      <h1>Home Page</h1>
      <h1>Welcome : {userName.user}</h1>
      <button
      onClick={handleLogout}
      >LogOut</button>
    </>
  );
};

export default Homepage;
