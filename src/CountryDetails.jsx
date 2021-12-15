import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "./firebase_config";

const CountryDetails = () => {
  const { id } = useParams();

  const [countryData, setCountryData] = useState();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountry();
    getcountries();
  }, [id]);

  function getcountries() {
    db.collection("countries")
      .where("index", ">", "0")
      .where("index", "<=", "0.2073")
      .orderBy("index", "asc")
      .onSnapshot(function (querySnapshot) {
        setCountries(
          querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
            id: doc.id,
          }))
        );
      });
  }

  const fetchCountry = async () => {
    try {
      const response = await db.collection("countries").doc(id).get();
      const name = await db.collection("countries").doc(name).get();
      setCountryData({
        id,
        name,
        ...response.data(),
        ...name.data(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>{countries}</div>
    </>
  );
};

export default CountryDetails;
