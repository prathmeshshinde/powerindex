import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase_config.js";

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    db.collection("countries")
      .where("name", "!=", "A Country")
      .orderBy("name", "asc")
      .onSnapshot(function (querySnapshot) {
        setCountries(
          querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
          }))
        );
      });
  }

  return (
    <div className="index-score">
      <p className="score">
        <span>N</span> <span>I</span>
      </p>
      <div className="cat">
        <div className="nation-name">Country's Name</div>
      </div>

      {countries.map((countries) => {
        return (
          <div className="list">
            <div className="nation-name1"> {countries.name} </div>
            <div>{countries.index}</div>
          </div>
        );
      })}
    </div>
  );
}

{
  /* <select
  className="select-country"
  id="firstCountry"
  value={firstCountry?.id ?? undefined}
  name="countries"
  onChange={(e) => {
    setFirstCountry(countries.find((country) => country.id === e.target.value));
    console.log(e.target.value);
  }}
>
  {countries.map((country) => {
    return <option value={country.id}> {country.name} </option>;
  })}
</select>; */
}

export default Country;
