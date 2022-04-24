import React, { useState, createContext, useEffect } from "react";
// import axios from "axios";
import { getData } from "../data";
export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, setdata] = useState({});
  const [newdata, setnewdata] = useState({});
  const [user, setuser] = useState({ email: "", password: "" });
  useEffect(() => {
    let added = getData();
    console.log(added);
    setdata(added);
    setnewdata(added);

    // axios
    //   .get("./date")
    //   .then((res) => {
    //     setdata(res.data);
    //     console.log(res.date);
    //   })
    //   .catch((error) => alert(error));
  }, []);
  console.log(data);
  return (
    <DataContext.Provider value={{ data, newdata, setnewdata, user, setuser }}>
      {children}
    </DataContext.Provider>
  );
}
