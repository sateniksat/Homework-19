import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, setdata] = useState([]);
  const [theme,setTheme]=useState("light");
  const handleTheme=()=>{
    const newTheme= theme==="light" ? "dark": "light";
    setTheme(newTheme);
    // console.log(theme);
  }
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <DataContext.Provider value={{ data ,theme,handleTheme}}>{children}</DataContext.Provider>
  );
}
