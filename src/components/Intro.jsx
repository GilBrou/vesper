/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function Intro(data) {
  console.log(data.data1);
  /*DOM*/
  return (
    <section className="intro">
      <div className="subIntro introLeft ">
        <img src="/img/VesperAstria.webp" alt="image" />
      </div>

      <div className="subIntro introRight">
        {data.data1 ? data.data1.intro.p1 : "chargement..."}
        {data.data1 ? data.data1.intro.p2 : "chargement..."}
        {data.data1 ? data.data1.intro.p3 : "chargement..."}
        {data.data1 ? data.data1.intro.p4 : "chargement..."}
      </div>
    </section>
  );
}
