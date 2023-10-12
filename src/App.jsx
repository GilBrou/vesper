/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***COMPONENTS***/
import Header from "./components/Header";
import { Loader1, Loader2, StarsAnim } from "./components/Animations";

/***PAGES***/
import Homepage from "./pages/Homepage";

/***APP***/
export default function App() {
  /*Get datas*/
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});

  /*Json files urls*/
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
        }),
      );
    }
    getDatas();
  }, []);

  /*Check if loading is complete before rendering*/
  if (Loading) {
    /*LOADING ANIMATION*/
    return <Loader1 />;
    /*Check if loading is complete and render spinner for 1,99 seconds*/
  } else if (!Loading && Loading2) {        
    setTimeout(() => {
      setLoading2(false);
    }, "1990");
    return <Loader2 />;
  } else {
    /*Finaly render DOM*/    
    return (
      <Router>
        <Header data={Data1} />
        <div className="app">
          {/*MAIN BACKGROUND ANIMATION*/}
          <StarsAnim />
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
