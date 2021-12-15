import React from "react";
import { useEffect, useState } from "react";
import { db } from "./firebase_config.js";
import Country from "./Country.jsx";

function Nation() {
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
        <span>N</span>ations <span>I</span>ndex
      </p>
      <div className="cat">
        <div className="nation-name">Country's Name</div>
      </div>

      {countries.map((countries) => {
        return (
          <div className="list">
            <div className="nation-name1"> {countries.name} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Nation;
