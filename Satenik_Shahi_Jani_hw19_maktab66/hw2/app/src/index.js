import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import "./styles.css";
// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DataContextProvider from "./context/DataContext";
import EditContextProvider from "./context/EditContext";
import ProtectedRout from "./components/ProtectedRout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <DataContextProvider>
    <EditContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<App />}>
            <Route index element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRout>
                  <Dashboard />
                </ProtectedRout>
              }
            />
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
    </EditContextProvider>
  </DataContextProvider>
  // </StrictMode>
);
