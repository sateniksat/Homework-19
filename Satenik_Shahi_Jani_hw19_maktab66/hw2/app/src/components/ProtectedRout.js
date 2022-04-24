import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function ProtectedRout({ children }) {
  const { user } = useContext(DataContext);
  const localuser = localStorage.getItem("user");
  const obj = JSON.parse(localuser);
  // console.log(obj)
  if (user?.email && user?.password) {
    return <>{children}</>;
  }
  if (obj?.email && obj?.password) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"} />;
}
