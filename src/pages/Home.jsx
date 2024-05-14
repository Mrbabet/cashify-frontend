import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={"/reports"}>Reports</Link>
    </>
  );
};

export default Home;
