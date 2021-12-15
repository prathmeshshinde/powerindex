import React from "react";
import { useEffect, useState } from "react";
import { db } from "./firebase_config.js";

function Compare() {
  const [countries, setCountries] = useState([]);
  const [firstCountry, setFirstCountry] = useState(null);
  const [secondCountry, setSecondCountry] = useState(null);
  const [isCompareVisible, setIsCompareVisible] = useState(false);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    getcountries();
  }, []);

  function getcountries() {
    setIsLoading(true);
    try {
      db.collection("countries")
        .orderBy("name", "asc")
        .onSnapshot(function (querySnapshot) {
          const countries = querySnapshot.docs.map((doc) => ({
            no: doc.data().no,
            name: doc.data().name,
            index: doc.data().index,
            population: doc.data().population,
            manpower: doc.data().manpower,
            defense: doc.data().defense,
            debt: doc.data().debt,
            foreign: doc.data().foreign,
            purchasing: doc.data().purchasing,
            airpower: doc.data().airpower,
            fighter: doc.data().fighter,
            heli: doc.data().heli,
            attack: doc.data().attack,
            carrier: doc.data().carrier,
            sub: doc.data().sub,
            destroyer: doc.data().destroyer,
            frigate: doc.data().frigate,
            corvette: doc.data().corvette,
            patrol: doc.data().patrol,
            afv: doc.data().afv,
            artillery: doc.data().artillery,
            labor: doc.data().labor,
            navy: doc.data().navy,
            rocket: doc.data().rocket,
            spg: doc.data().spg,
            tanks: doc.data().tanks,
            id: doc.id,
          }));

          setCountries(countries);
          console.log(countries);
        });
      console.log("called");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return "Loading...";
  return (
    <div className="index-compare">
      <p className="com-top">Compare Countries</p>
      <form id="container-cont">
        <div className="option_container">
          <select
            className="compare_option"
            id="firstCountry"
            value={firstCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setFirstCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries
              .filter((country) => country.id !== secondCountry?.id)
              .map((country) => {
                return <option value={country.id}> {country.name} </option>;
              })}
          </select>

          <select
            className="compare_option"
            id="secondCountry"
            value={secondCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setSecondCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries
              .filter((country) => country.id !== firstCountry?.id)
              .map((country) => {
                return <option value={country.id}> {country.name} </option>;
              })}
          </select>
        </div>

        <input
          className="compare_button"
          type="button"
          value="Compare"
          onClick={() =>
            !!firstCountry &&
            !!secondCountry &&
            firstCountry !== secondCountry &&
            firstCountry.no &&
            secondCountry.no > 0
              ? setIsCompareVisible(true)
              : alert("Select a Country")
          }
        ></input>
      </form>

      {isCompareVisible && (
        <table className="compare_table">
          <th className="com-table">
            <td className="container-sr1">Name</td>
            <td className="row1">{firstCountry.name}</td>
            <td className="col1">{secondCountry.name}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Power Index</td>
            <td className="row">{firstCountry.index}</td>
            <td className="col">{secondCountry.index}</td>
          </th>
          <th className="com-table">
            <td className="container-sr"></td>
            <td className="row-table">MANPOWER</td>
            <td className="col">{}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Population</td>
            <td className="row">
              {firstCountry.population.toLocaleString("en-US")}
            </td>
            <td className="col">
              {secondCountry.population.toLocaleString("en-US")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Manpower</td>
            <td className="row">
              {firstCountry.manpower.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.manpower.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Labor Force</td>
            <td className="row">
              {firstCountry.labor.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.labor.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr"></td>
            <td className="row-table">FINANCIALS</td>
            <td className="col">{}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Defense Budget</td>
            <td className="row">
              ${firstCountry.defense.toLocaleString("en-Us")}
            </td>
            <td className="col">
              ${secondCountry.defense.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">External Debt</td>
            <td className="row">
              ${firstCountry.debt.toLocaleString("en-Us")}
            </td>
            <td className="col">
              ${secondCountry.debt.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Foreign Reserve</td>
            <td className="row">
              ${firstCountry.foreign.toLocaleString("en-Us")}
            </td>
            <td className="col">
              ${secondCountry.foreign.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Purchasing Power</td>
            <td className="row">
              ${firstCountry.purchasing.toLocaleString("en-Us")}
            </td>
            <td className="col">
              ${secondCountry.purchasing.toLocaleString("en-Us")}
            </td>
          </th>

          <th className="com-table">
            <td className="container-sr"></td>
            <td className="row-table">AIR POWER</td>
            <td className="col">{}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Airpower</td>
            <td className="row">
              {firstCountry.airpower.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.airpower.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Fighter Aircrafts</td>
            <td className="row">
              {firstCountry.fighter.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.fighter.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Helicopters</td>
            <td className="row">{firstCountry.heli.toLocaleString("en-Us")}</td>
            <td className="col">
              {secondCountry.heli.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Attack Helicopters</td>
            <td className="row">
              {firstCountry.attack.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.attack.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr"></td>
            <td className="row-table">LAND POWER</td>
            <td className="col">{}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Tank Strength</td>
            <td className="row">
              {firstCountry.tanks.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.tanks.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Armored Vehicles</td>
            <td className="row">{firstCountry.afv.toLocaleString("en-Us")}</td>
            <td className="col">{secondCountry.afv.toLocaleString("en-Us")}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Self-Propelled Artillery</td>
            <td className="row">{firstCountry.spg.toLocaleString("en-Us")}</td>
            <td className="col">{secondCountry.spg.toLocaleString("en-Us")}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Towed Artillery</td>
            <td className="row">
              {firstCountry.artillery.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.artillery.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Rocket Projectors</td>
            <td className="row">
              {firstCountry.rocket.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.rocket.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr"></td>
            <td className="row-table">NAVAL POWER</td>
            <td className="col">{}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Fleet Strength</td>
            <td className="row">{firstCountry.navy.toLocaleString("en-Us")}</td>
            <td className="col">
              {secondCountry.navy.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Aircraft Carriers</td>
            <td className="row">
              {firstCountry.carrier.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.carrier.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Submarines</td>
            <td className="row">{firstCountry.sub.toLocaleString("en-Us")}</td>
            <td className="col">{secondCountry.sub.toLocaleString("en-Us")}</td>
          </th>
          <th className="com-table">
            <td className="container-sr">Destroyers</td>
            <td className="row">
              {firstCountry.destroyer.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.destroyer.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Frigates</td>
            <td className="row">
              {firstCountry.frigate.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.frigate.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Corvettes</td>
            <td className="row">
              {firstCountry.corvette.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.corvette.toLocaleString("en-Us")}
            </td>
          </th>
          <th className="com-table">
            <td className="container-sr">Patrol Vessels</td>
            <td className="row">
              {firstCountry.patrol.toLocaleString("en-Us")}
            </td>
            <td className="col">
              {secondCountry.patrol.toLocaleString("en-Us")}
            </td>
          </th>
        </table>
      )}
    </div>
  );
}

export default Compare;
