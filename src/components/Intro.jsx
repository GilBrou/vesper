/******INTRO MODULE******/
export default function Intro(data) {
  /*DOM*/
  return (
    <section className="intro">
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
