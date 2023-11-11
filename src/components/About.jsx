/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function About(data) {
  /*console.log(data.data1);*/
  /*DOM*/
  return (
    <section id="à-propos" className="about">
      <div className="subIntro introLeft ">
        <img src="/img/VesperAstria2.webp" alt="image" />
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
