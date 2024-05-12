import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const Layout = () => {
  return (
    <>
      <TopBar />
      <main as="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
