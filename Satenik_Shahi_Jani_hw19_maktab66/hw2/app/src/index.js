import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import "./styles.css"
// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />}>
        <Route index element={<Home />} />
        {/* <Route
          path={"/dashboard"}
          element={
            <ProtectedRout>
              <Dashboard />
            </ProtectedRout>
          }
        /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
