import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

export default function Searchbox() {
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { data,theme } = useContext(DataContext);
  const handleInput = () => {
    const includes = data.filter((item) => {
      return item.name.toLowerCase().includes(typed);
    });
    if (includes.length !==1) {
      navigate("/notfound")
    }else{
      navigate(`/${includes[0].alpha3Code}`)
    }
  };
  const close=async()=>{
    setTimeout(() => {
      setShow(false)
    }, 300);
  }
  const suggestHandle = async (value) => {
    setShow(true);
    const input = value.toLowerCase();
    setTimeout(() => {
      const includes = data.filter((item) => {
        return item.name.toLowerCase().includes(input);
      });
      setItems(includes);
      // console.log("hi");
      // console.log(items);
      setTyped(input);
    }, 700);
    if(value===""){
      close()
    }
  };
  return (
    <div className={`search ${theme}`}>
      <button onClick={(e) => handleInput(e)}  >
      {/* onClick={() => handleInput()} */}
        <span
          className="iconify-inline"
          data-icon="ant-design:search-outlined"
          data-width="20"
        ></span>
      </button>
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => suggestHandle(e.target.value)}
        onFocus={() => setShow(true)}
        onKeyUp={(e)=>e.key==="Enter"? handleInput(e): false}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => close()}
      />
      {show && <div className="list-item">
          {items.map((item) => {
            return (
              <Link key={item.alpha3Code} to={`/${item.alpha3Code}`}>
                <li>{item.name}</li>
              </Link>
            );
          })}
        </div>
      }
    </div>
  );
}
