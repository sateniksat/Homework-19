import React, { useContext } from "react";
import Card from "../Components/Card";
import RegionFilter from "../Components/RegionFilter";
import Searchbar from "../Components/Searchbar";
import { DataContext } from "../Context/DataContext";

export default function CountryCards() {
  const {data}=useContext(DataContext);
  return (
    <div className="countryCards">
      <div className="container">
        <div className="tools">
          <Searchbar/>
          <RegionFilter/>
        </div>
        <div className="gridCards">
          {data.map(item=>{
            return <Card
            key={item.alpha3Code}
            name={item.name}
            population={item.population}
            capital={item.capital}
            region={item.region}
            flag={item.flag}
            link={item.alpha3Code}
            />
          })}
        </div>
      </div>
    </div>
  );
}
