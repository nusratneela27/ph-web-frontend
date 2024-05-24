import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner aria-label="Extra large spinner example" size="xl" />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
