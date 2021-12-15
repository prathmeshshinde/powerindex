import React from "react";
import { useEffect, useState } from "react";
import { db } from "./firebase_config.js";

function Score() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    db.collection("countries")
      .where("index", ">", "0")
      .where("index", "<=", "0.8371")
      .orderBy("index", "asc")
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
        <span>P</span>ower <span>I</span>ndex <span>S</span>core
      </p>
      <div className="cat">
        <div className="no">No.</div>
        <div className="name">Name</div>
        <div className="index">Power Score</div>
      </div>

      {countries.map((countries) => {
        return (
          <div className="list">
            <div className="no"> {countries.no}. </div>
            <div className="flag"> {countries.img} </div>
            <div className="name"> {countries.name} </div>
            <div className="index"> {countries.index} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Score;
