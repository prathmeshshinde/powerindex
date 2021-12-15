import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase_config";

function Army() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    db.collection("countries")
      .where("tanks", ">=", 300)
      .orderBy("tanks", "desc")
      .onSnapshot(function (querySnapshot) {
        setCountries(
          querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
            tanks: doc.data().tanks,
            land: doc.data().land,
          }))
        );
      });
  }

  return (
    <div className="index-score">
      <p className="score">
        <span>L</span>and <span>F</span>orces <span>S</span>trength
      </p>
      <div className="cat">
        <div className="no">No.</div>
        <div className="name">Name</div>
        <div className="index">Total tanks</div>
      </div>

      {countries.map((countries) => {
        return (
          <div className="list">
            <div className="no"> {countries.land} </div>
            <div className="flag"> {countries.img} </div>
            <div className="name"> {countries.name} </div>
            <div className="index">
              {countries.tanks.toLocaleString("en-Us")}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Army;
