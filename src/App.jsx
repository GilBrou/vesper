/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***COMPONENTS***/
import Header from "./components/Header";

/***PAGES***/
import Homepage from "./pages/Homepage";

/***APP***/
export default function App() {
  /*Get datas*/
  const [Loading, setLoading] = useState(true);
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});
  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});

  /*Json file urls*/

  let Json1 =
    "https://raw.githubusercontent.com/GilBrou/vesper/master/src/data/data.json";
  let Json2 =
    "https://raw.githubusercontent.com/GilBrou/vesper/master/src/data/data2.json";

  /*axios config*/

  const requestOne = axios.get(Json1);
  const requestTwo = axios.get(Json2);

  useEffect(() => {
    async function getDatas() {
      axios.all([requestOne, requestTwo]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          setData1(responseOne.data);
          setData2(responseTwo.data);
          setLoading(false);
          setAllDatas(Data1);
          setAllDatas2(Data2);
        }),
      );
    }
    getDatas();
  }, []);

  /*Check if loading is complete before rendering*/
  if (Loading) {
    /*LOADING ANIMATION*/
    /*console.log("LOADING")*/
    return (
      <div className="loaderWrapper">
        <div className="container">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    );
  } else {
    /*console.log("LOADED")*/
    /*DOM*/
    return (
      <Router>
        {/*LOADING ANIMATION*/}
        <div className="loaderWrapper loaderWrapper2">
          <div className="container">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>

        <Header data1={Data1} />
        <div className="app">
          {/*BACKGROUND ANIMATION*/}
          <div id="animWrapper">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </div>
          {/*ROUTES*/}
          <Switch>
            {/*HOMEPAGE*/}
            <Route exact path="/accueil">
              <Homepage data1={Data1} />
            </Route>
            {/*REDIRECT*/}
            <Route>
              <Redirect to="/accueil" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
