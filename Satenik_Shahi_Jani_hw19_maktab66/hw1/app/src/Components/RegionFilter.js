import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { IoIosArrowDown } from "react-icons/io";

export default function RegionFilter() {
  const [region, setRegion] = useState("All");
  const [show, setshow] = useState(false);

  const { data, theme, setFilter } = useContext(DataContext);
  const handleClick = (id) => {
    setRegion(id);
    if (id === "All") {
      setFilter(data);
    } else {
      const includes = data.filter((item) => item.region === id);
      setFilter(includes);
    }
  };
  return (
    <div className={`region ${theme}`} onClick={() => setshow(!show)}>
      <input value={region} disabled />
      <IoIosArrowDown />
      {show && (
        <div className="list-item">
          <ul>
            <li onClick={(e) => handleClick(e.target.id)} id={"All"}>
              All
            </li>
            <li onClick={(e) => handleClick(e.target.id)} id={"Africa"}>
              Africa
            </li>
            <li onClick={(e) => handleClick(e.target.id)} id={"Americas"}>
              America
            </li>
            <li onClick={(e) => handleClick(e.target.id)} id={"Asia"}>
              Asia
            </li>
            <li onClick={(e) => handleClick(e.target.id)} id={"Europe"}>
              Europe
            </li>
            <li onClick={(e) => handleClick(e.target.id)} id={"Oceania"}>
              Oceania
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
