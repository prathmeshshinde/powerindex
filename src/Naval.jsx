import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase_config";

function Naval() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    db.collection("countries")
      .where("navy", ">", 0)
      .where("navy", ">=", 48)
      .orderBy("navy", "desc")
      .onSnapshot(function (querySnapshot) {
        setCountries(
          querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
            navy: doc.data().navy,
            naval: doc.data().naval,
          }))
        );
      });
  }

  return (
    <div className="index-score">
      <p className="score">
        <span>N</span>aval <span>F</span>orces <span>S</span>trength
      </p>
      <div className="cat">
        <div className="no">No.</div>
        <div className="name">Name</div>
        <div className="index">Strength</div>
      </div>

      {countries.map((countries) => {
        return (
          <div className="list">
            <div className="no"> {countries.naval} </div>
            <div className="flag"> {countries.img} </div>
            <div className="name"> {countries.name} </div>
            <div className="index"> {countries.navy} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Naval;
