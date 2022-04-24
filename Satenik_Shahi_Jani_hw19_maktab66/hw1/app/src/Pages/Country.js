import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

export default function Country() {
  const params = useParams();
  const { data } = useContext(DataContext);
  let navigate = useNavigate();
  // console.log(params);
  // console.log(params.countryID);
  function findCounrty(alphaName) {
    return data.find((item) => item.alpha3Code === alphaName);
  }
  const country = findCounrty(params.countryID);
  // console.log(country);

  return (
    <div className={`country-page`}>
      <div className="container">
        <div className={`tools`}>
          <button onClick={() => navigate("/")} onDoubleClick={() => navigate('/')}>
            <span className="iconify-inline" data-icon="bi:arrow-left"></span>
            Back
          </button>
        </div>
        <div className="details">
          <div className="details-item">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="details-item">
            <h2>{country.name}</h2>
            <div className="details-flex-row">
              <div>
                {/* className="details-flex-column" */}
                <p>
                  <b>Native Name:</b>
                  {country.nativeName}
                </p>
                <p>
                  <b>Population:</b>
                  {country.population}
                </p>
                <p>
                  <b>Region:</b>
                  {country.region}
                </p>
                <p>
                  <b>Sub Region:</b>
                  {country.subregion}
                </p>
                <p>
                  <b>Capital:</b>
                  {country.capital}
                </p>
              </div>
              <div className="column">
                <p>
                  <b>Top Level Domain:</b>
                  {country.topLevelDomain.map((item, index) => {
                    if (index > 0) {
                      return `,${item}`;
                    }
                    return item;
                  })}
                </p>
                <p>
                  <b>Currencies:</b>
                  {country.currencies.name}
                </p>
                <p>
                  <b>Languages:</b>
                  {country.languages.map((item, index) => {
                    if (index > 0) {
                      return `,${item.name}`;
                    }
                    return item.name;
                  })}
                </p>
              </div>
            </div>
            <div className="border">
              <div>
                <b>Border Counteries:</b>
                <div className="border">

                
                {country.borders?.map((item) => {
                  return (
                    <Link to={`/${item}`} key={item}>
                      <button>{findCounrty(item).name}</button>
                    </Link>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
