import React from "react";
import kapustaLogo from "../../assets/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";

const TopBar = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log(accessToken);

  const handleLogout = () => {
    if (accessToken) {
      dispatch(logoutUser());
    } else {
      console.error("Access token not found. Unable to logout.");
    }
  };
  return (
    <header>
      <img src={kapustaLogo} alt="Kapusta logo" />
      <button onClick={handleLogout}>Exit</button>
    </header>
  );
};

export default TopBar;
