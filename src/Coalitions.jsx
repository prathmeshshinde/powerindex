import React from "react";
import { useEffect, useState } from "react";
import { db } from "./firebase_config.js";

function Coalitions() {
  const [countries, setCountries] = useState([]);
  const [firstCountry, setFirstCountry] = useState(null);
  const [secondCountry, setSecondCountry] = useState(null);
  const [thirdCountry, setThirdCountry] = useState(null);
  const [forthCountry, setForthCountry] = useState(null);
  const [fifthCountry, setFifthCountry] = useState(null);
  const [sixthCountry, setSixthCountry] = useState(null);
  const [firstCountry1, setFirstCountry1] = useState(null);
  const [secondCountry2, setSecondCountry2] = useState(null);
  const [thirdCountry3, setThirdCountry3] = useState(null);
  const [forthCountry4, setForthCountry4] = useState(null);
  const [fifthCountry5, setFifthCountry5] = useState(null);
  const [sixthCountry6, setSixthCountry6] = useState(null);
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
            defense: doc.data().defense,
            airpower: doc.data().airpower,
            manpower: doc.data().manpower,
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
          setFirstCountry(countries[0]);
          setSecondCountry(countries[0]);
          setThirdCountry(countries[0]);
          setForthCountry(countries[0]);
          setFifthCountry(countries[0]);
          setSixthCountry(countries[0]);
          setFirstCountry1(countries[0]);
          setSecondCountry2(countries[0]);
          setThirdCountry3(countries[0]);
          setForthCountry4(countries[0]);
          setFifthCountry5(countries[0]);
          setSixthCountry6(countries[0]);
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
      <p className="coa-top">Compare Coalitions</p>
      <p className="coa-title">Coalition 1:</p>
      <form id="container-cont">
        <div className="compare-container">
          <select
            className="select-country"
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
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
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
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="thirdCountry"
            value={thirdCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setThirdCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="forthCountry"
            value={forthCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setForthCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="fifthCountry"
            value={fifthCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setFifthCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="sixthCountry"
            value={sixthCountry?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setSixthCountry(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>
        </div>
      </form>

      <p className="coa-title">Coalition 2:</p>
      <form id="container-cont">
        <div className="compare-container">
          <select
            className="select-country"
            id="firstCountry1"
            value={firstCountry1?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setFirstCountry1(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="secondCountry2"
            value={secondCountry2?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setSecondCountry2(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="thirdCountry3"
            value={thirdCountry3?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setThirdCountry3(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="forthCountry4"
            value={forthCountry4?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setForthCountry4(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="fifthCountry5"
            value={fifthCountry5?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setFifthCountry5(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>

          <select
            className="select-country"
            id="sixthCountry6"
            value={sixthCountry6?.id ?? undefined}
            name="countries"
            onChange={(e) => {
              setSixthCountry6(
                countries.find((country) => country.id === e.target.value)
              );
              console.log(e.target.value);
            }}
          >
            {countries.map((country) => {
              return <option value={country.id}> {country.name} </option>;
            })}
          </select>
        </div>

        <input
          className="coa_button"
          type="button"
          value="Compare"
          onClick={() =>
            !!firstCountry &&
            !!firstCountry1 &&
            firstCountry.no &&
            firstCountry1.no > 0
              ? setIsCompareVisible(true)
              : alert("At least select 2 countries")
          }
        ></input>
      </form>

      {isCompareVisible && (
        <table>
          <div className="coalition">
            <div className="coa">
              <p className="coalition-title">Coalition 1</p>
              <div className="display">
                <th className="coa-table">
                  <td className="container-man">Manpower</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.manpower +
                      secondCountry.manpower +
                      thirdCountry.manpower +
                      forthCountry.manpower +
                      fifthCountry.manpower +
                      sixthCountry.manpower
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">Airpower</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.airpower +
                      secondCountry.airpower +
                      thirdCountry.airpower +
                      forthCountry.airpower +
                      fifthCountry.airpower +
                      sixthCountry.airpower
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">Tanks</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.tanks +
                      secondCountry.tanks +
                      thirdCountry.tanks +
                      forthCountry.tanks +
                      fifthCountry.tanks +
                      sixthCountry.tanks
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>
              <div className="display">
                <th className="coa-table">
                  <td className="container-air">AFVs</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.afv +
                      secondCountry.afv +
                      thirdCountry.afv +
                      forthCountry.afv +
                      fifthCountry.afv +
                      sixthCountry.afv
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">SPGs</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.spg +
                      secondCountry.spg +
                      thirdCountry.spg +
                      forthCountry.spg +
                      fifthCountry.spg +
                      sixthCountry.spg
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">Artillery</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.artillery +
                      secondCountry.artillery +
                      thirdCountry.artillery +
                      forthCountry.artillery +
                      fifthCountry.artillery +
                      sixthCountry.artillery
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>
              <div className="display">
                <th className="coa-table">
                  <td className="container-air">Rocket Art</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.rocket +
                      secondCountry.rocket +
                      thirdCountry.rocket +
                      forthCountry.rocket +
                      fifthCountry.rocket +
                      sixthCountry.rocket
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">Navy</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.navy +
                      secondCountry.navy +
                      thirdCountry.navy +
                      forthCountry.navy +
                      fifthCountry.navy +
                      sixthCountry.navy
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-air">Labor Force</td>
                  <td className="coalition-div">
                    {(
                      firstCountry.labor +
                      secondCountry.labor +
                      thirdCountry.labor +
                      forthCountry.labor +
                      fifthCountry.labor +
                      sixthCountry.labor
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>
            </div>

            <div className="coa2">
              <p className="coalition-title">Coalition 2</p>
              <div className="display">
                <th className="coa-table">
                  <td className="container-man">Manpower</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.manpower +
                      secondCountry2.manpower +
                      thirdCountry3.manpower +
                      forthCountry4.manpower +
                      fifthCountry5.manpower +
                      sixthCountry6.manpower
                    ).toLocaleString("en-Us")}
                  </td>
                </th>

                <th className="coa-table">
                  <td className="container-air">Airpower</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.airpower +
                      secondCountry2.airpower +
                      thirdCountry3.airpower +
                      forthCountry4.airpower +
                      fifthCountry5.airpower +
                      sixthCountry6.airpower
                    ).toLocaleString("en-Us")}
                  </td>
                </th>

                <th className="coa-table">
                  <td className="container-man">Tanks</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.tanks +
                      secondCountry2.tanks +
                      thirdCountry3.tanks +
                      forthCountry4.tanks +
                      fifthCountry5.tanks +
                      sixthCountry6.tanks
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>

              <div className="display">
                <th className="coa-table">
                  <td className="container-man">AFVs</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.afv +
                      secondCountry2.afv +
                      thirdCountry3.afv +
                      forthCountry4.afv +
                      fifthCountry5.afv +
                      sixthCountry6.afv
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-man">SPGs</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.spg +
                      secondCountry2.spg +
                      thirdCountry3.spg +
                      forthCountry4.spg +
                      fifthCountry5.spg +
                      sixthCountry6.spg
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-man">Artillery</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.artillery +
                      secondCountry2.artillery +
                      thirdCountry3.artillery +
                      forthCountry4.artillery +
                      fifthCountry5.artillery +
                      sixthCountry6.artillery
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>

              <div className="display">
                <th className="coa-table">
                  <td className="container-man">Rocket Art</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.rocket +
                      secondCountry2.rocket +
                      thirdCountry3.rocket +
                      forthCountry4.rocket +
                      fifthCountry5.rocket +
                      sixthCountry6.rocket
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-man">Navy</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.navy +
                      secondCountry2.navy +
                      thirdCountry3.navy +
                      forthCountry4.navy +
                      fifthCountry5.navy +
                      sixthCountry6.navy
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
                <th className="coa-table">
                  <td className="container-man">Labor Force</td>
                  <td className="coalition-div">
                    {(
                      firstCountry1.labor +
                      secondCountry2.labor +
                      thirdCountry3.labor +
                      forthCountry4.labor +
                      fifthCountry5.labor +
                      sixthCountry6.labor
                    ).toLocaleString("en-Us")}
                  </td>
                </th>
              </div>
            </div>
          </div>
        </table>
      )}
    </div>
  );
}

export default Coalitions;
