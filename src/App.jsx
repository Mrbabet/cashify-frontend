import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Welcome = lazy(() => import("./pages/Welcome"));
const Home = lazy(() => import("./pages/Home"));
const Reports = lazy(() => import("./pages/Reports"));
import Layout from "./components/Layout/Layout";

import React from "react";

const App = () => {
  return (
    <>  
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/welcome"
              element=
                {<Welcome />} />
              
          
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home />
                }
              />
              <Route
                path="/reports"
                element={
                  <Reports />
                } />
              
            </Route>
          </Routes>
        </Suspense>
    
    </>
  );
};

export default App;
