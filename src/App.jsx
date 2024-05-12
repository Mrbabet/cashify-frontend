import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Welcome = lazy(() => import("./pages/Welcome"));
const Home = lazy(() => import("./pages/Home"));
const Reports = lazy(() => import("./pages/Reports"));
import Layout from "./components/Layout/Layout";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";

import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import React from "react";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <div>Fetching user data</div>}

      {!isRefreshing && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/welcome"
              element={
                <RestrictedRoute redirectTo="/" component={<Welcome />} />
              }
            />
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute redirectTo="/welcome" component={<Home />} />
                }
              />
              <Route
                path="/reports"
                element={
                  <PrivateRoute redirectTo="/welcome" component={<Reports />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
