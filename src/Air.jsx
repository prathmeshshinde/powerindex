import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase_config.js";

function Air() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    db.collection("countries")
      .where("airpower", ">=", 194)
      .orderBy("airpower", "desc")
      .onSnapshot(function (querySnapshot) {
        setCountries(
          querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
            airpower: doc.data().airpower,
            air: doc.data().air,
          }))
        );
      });
  }

  return (
    <div className="index-score">
      <p className="score">
        <span>A</span>ir <span>F</span>orce <span>S</span>trength
      </p>
      <div className="cat">
        <div className="no">No.</div>
        <div className="name">Name</div>
        <div className="index">Total Aircrafts</div>
      </div>

      {countries
        .filter((countries) => countries.air > 0)
        .map((countries) => {
          return (
            <div className="list">
              <div className="no"> {countries.air} </div>
              <div className="flag"> {countries.img} </div>
              <div className="name"> {countries.name} </div>
              <div className="index">
                {countries.airpower.toLocaleString("en-Us")}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Air;
