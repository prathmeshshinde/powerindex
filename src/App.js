import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase_config.js";
import Score from "./Score";
import Nation from "./Nation";
import Comapre from "./Compare.jsx";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Army from "./components/Army";
import Naval from "./components/Naval";
import Air from "./components/Air";
import Coalitions from "./Coalitions";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <section className="navigation">
            <div className="nav-container">
              <h1>
                <span>P</span>ower<span>I</span>ndex
              </h1>
              <div className="nav">
                <ul>
                  <Link to="/">
                    <div className="main-nav">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                    </div>
                  </Link>

                  <div className="main-nav">
                    <Link to="/Score">
                      <li>
                        <a href="#ranking">Ranking</a>
                      </li>
                    </Link>
                    <div class="dropdown-box">
                      <Link to="/Air">
                        <li>
                          <a href="#">Air Forces</a>
                        </li>
                      </Link>

                      <Link to="/Army">
                        <li>
                          <a href="#">Land Forces</a>
                        </li>
                      </Link>

                      <Link to="/Naval">
                        <li>
                          <a href="#">Naval Forces</a>
                        </li>
                      </Link>
                    </div>
                  </div>

                  <div class="main-nav">
                    <Link to="/Compare">
                      <li>
                        <a href="#">Compare</a>
                      </li>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Score" exact component={Score} />
            <Route path="/Nation" exact component={Nation} />
            <Route path="/Compare" exact component={Comapre} />
            <Route path="/Army" exact component={Army} />
            <Route path="/Naval" exact component={Naval} />
            <Route path="/Air" exact component={Air} />
            <Route path="/Coalitions" exact component={Coalitions} />
            <Route path="/Country" exact component={Country} />
            <Route path="/Country/:id" exact component={CountryDetails} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

const Home = () => {
  const [countries, setCountries] = useState([]);

  //  function componentDidMount(){
  //    //console.log('mounted');
  //    db.collection('countries')
  //      .orderBy('index', 'asc')
  //      .get()
  //      .then( snapshot => {
  //       const countries = []
  //       snapshot.forEach( doc => {
  //         const data = doc.data()
  //         countries.push(data)
  //       })
  //       this.setState({ countries: countries})
  //       //  console.log(snapshot);
  //      })
  //      .catch(error => console.log(error))
  //  }

  useEffect(() => {
    getcountries();
  }, []);

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

  return (
    <div className="App">
      <section className="hero">
        <div className="back">
          <p className="top">
            Top 50 Countries Ranking by Military, Air Force,<br></br> and Naval
            Force
          </p>
        </div>
        <div className="container">
          <button className="pwrindex1">
            <Link to="/Score">
              <h2>Power Index Score</h2>
            </Link>
          </button>

          <button className="pwrindex2">
            <Link to="/Compare">
              <h2>Compare Countries</h2>
            </Link>
          </button>

          <button className="pwrindex3">
            <Link to="/Coalitions">
              <h2>Coalitions</h2>
            </Link>
          </button>

          <button className="pwrindex4">
            <Link to="/Nation">
              <h2>Nations Index</h2>
            </Link>
          </button>
        </div>
      </section>

      <p className="score">
        <span>P</span>ower <span>I</span>ndex <span>S</span>core
      </p>

      <div className="cat">
        <div className="no">No.</div>

        <div className="name">Name</div>

        <div className="index">Power Score</div>
      </div>

      {countries.map((country) => {
        return (
          <div className="list">
            <div className="no"> {country.no}. </div>
            <div className="flag"> {country.img} </div>
            <div className="name"> {country.name} </div>
            <div className="index"> {country.index} </div>
          </div>
        );
      })}

      <button className="more">
        <Link to="/Score" style={{ textDecoration: "none", color: "#fff" }}>
          More..
        </Link>
      </button>
    </div>
  );
};

export default App;
