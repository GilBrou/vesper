/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";
import Consult from "../components/Consult";
import About from "../components/About";
import Books from "../components/Books";
import Divider from "../components/Divider";
import Contact from "../components/Contact";



/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div id="accueil">
      <div className="homepage">
        <Intro data1={data.data1} />
        <Divider data={data.data1.menu.menu1} />
        <Consult data1={data.data1} />
        <Divider data={data.data1.menu.menu2} />
        <Books data1={data.data1} />

        <Divider data={data.data1.menu.menu3} />
        <About data1={data.data1} />
        <Divider data={data.data1.menu.menu4} />
        <Contact data1={data.data1} />

      </div>
    </div>
  );
}

