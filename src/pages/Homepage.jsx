/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";
import Consult from "../components/Consult";
import About from "../components/About";



/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div id="accueil">
      <div className="homepage"> 
        <Intro data1={data.data1} />    
        <Consult data1={data.data1} />   
        <About data1={data.data1} /> 
      </div>
    </div>
  );
}
