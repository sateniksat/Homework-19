import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "./Context/DataContext";


function App() {
  const {theme,handleTheme}=useContext(DataContext);
  // console.log(theme,"hi")
  return (
    <div className={`body-bg ${theme}`}>
    <nav className={`${theme}`}>
      <div className="container">
        <h2>Where in the world?</h2>
        <button onClick={()=>{handleTheme()}}>
        <span className="iconify-inline" data-icon="bi:moon"></span>
        Dark Mode
        </button>
      </div>
    </nav>
    <Outlet/>
    </div>    
  );
}

export default App;
 
