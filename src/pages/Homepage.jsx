/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";
import Consult from "../components/Consult";


/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div>
      <div className="homepage"> 
        <Intro data1={data.data1} />    
        <Consult data1={data.data1} />       
      </div>
    </div>
  );
}
