import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";

const Reports = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <div>Reports</div>
      <Link to={"/"}>Back to home</Link>
    </>
  );
};

export default Reports;
