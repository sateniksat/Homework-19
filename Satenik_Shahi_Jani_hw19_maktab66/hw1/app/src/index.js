import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataContextProvider from "./Context/DataContext";
import CountryCards from "./Pages/CountryCards";
import Country from "./Pages/Country";
import "./Styles/style.scss";
import NotFound from "./Pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DataContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CountryCards />} />
          <Route path=":countryID" element={<Country />}>
            
          </Route>
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataContextProvider>
  // {/* </React.StrictMode> */}
);
