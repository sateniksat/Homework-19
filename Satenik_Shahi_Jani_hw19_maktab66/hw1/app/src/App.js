import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { IoMoon,IoMoonOutline } from 'react-icons/io5';
import { DataContext } from "./Context/DataContext";


function App() {
  const {theme,handleTheme}=useContext(DataContext);
  // console.log(theme,"hi")
  return (
    <div className={`body-bg ${theme}`}>
    <nav className={`${theme}`}>
      <div className="container">
        <h2 className="forsize">Where in the world?</h2>
        <button style={{alignItems:"center",padding:"1%",display:"flex"}} onClick={()=>{handleTheme()}}>
        <div style={{fontSize:"large"}}>{theme==="light" ? <IoMoonOutline/> : <IoMoon/>}</div>
        Dark Mode
        </button>
      </div>
    </nav>
    <Outlet/>
    </div>    
  );
}

export default App;
 
