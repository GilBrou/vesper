/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function Intro(data) {
  /*console.log(data.data1);*/
  /*DOM*/
  return (
    <section className="intro" id="accueil">
      <div className="subIntro introLeft ">
        <img src="/img/VesperAstria.webp" alt="image" />
      </div>
      <div className="subIntro introRight">
        <p>{data.data1 ? data.data1.intro.p1 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.intro.p2 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.intro.p3 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.intro.p4 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.intro.p5 : "chargement..."}</p>
      </div>
    </section>
  );
}
