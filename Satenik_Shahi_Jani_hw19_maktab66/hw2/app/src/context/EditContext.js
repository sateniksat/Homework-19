import React, { useState, createContext, useEffect } from "react";

export const EditContext = createContext();

export default function EditContextProvider({ children }) {
  const [edit, setedit] = useState([]);
  const [sign, setsign] = useState(0);

  return (
    <EditContext.Provider value={{ edit, setedit, sign, setsign }}>
      {children}
    </EditContext.Provider>
  );
}
