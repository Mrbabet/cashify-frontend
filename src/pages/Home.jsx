import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const Home = () => {
  const dispatch = useDispatch();

  const refreshAccessToken = () => {
    dispatch(refreshUser())
      .unwrap()
      .then((response) => {
        console.log("Access token refreshed:", response);
      })
      .catch((error) => {
        console.error("Failed to refresh access token:", error);
      });
  };

  return (
    <>
      <div>Home</div>
      <Link to={"/reports"}>Reports</Link>
      <button onClick={refreshAccessToken}>Refresh Access Token</button>
    </>
  );
};

export default Home;
