/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***COMPONENTS***/
import Header from "./components/Header";

/***DATA***/
import Data00 from "./data/data.json";

/***PAGES***/
import Homepage from "./pages/Homepage";

/***APP***/
export default function App() {
  /*Get datas*/
  const [Loading, setLoading] = useState(true);
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});
  const [Data3, setData3] = useState({});

  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});
  const [allDatas3, setAllDatas3] = useState({});

  /*Json file urls*/

  let Json1 =
    "https://raw.githubusercontent.com/GilBrou/vesper/master/src/data/data.json";
  let Json2 =
    "https://raw.githubusercontent.com/GilBrou/vesper/master/src/data/data.json";

  /*axios config*/

  const requestOne = axios.get(Json1);
  const requestTwo = axios.get(Json2);

  useEffect(() => {
    async function getDatas() {
      axios.all([requestOne, requestTwo]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setData1(Data00);
          setData2(responseOne.data);
          setData3(responseTwo.data);
          setLoading(false);
          setAllDatas(Data00);
          setAllDatas2(Data2);
          setAllDatas3(Data3);
        }),
      );
    }
    getDatas();
  }, []);

  /*Check if loading is complete before rendering*/
  if (Loading) {
    console.log("LOADING");

    return null;
  } else {
    console.log(Data1, Data2, Data3);
    /*DOM*/
    return (
      <Router>
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
