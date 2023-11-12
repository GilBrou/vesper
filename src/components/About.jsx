/******ABOUT MODULE******/

/***COMPONENT***/
export default function About(data) {
  /*DOM*/
  return (
    <section id="à-propos" className="about">
      <div className="subTAbout subAboutDown">
        <div>
          <img className="img1" src="/img/VesperAstria2.webp" alt="image" />
          <p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            {data.data1 ? data.data1.about.aboutP1 : "chargement..."}
          </p>
        </div>
        <div className="sepIcon">
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-sun-o" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
        </div>
        <p>{data.data1 ? data.data1.about.aboutP2 : "chargement..."}</p>
        <div className="sepIcon">
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
        </div>
        <div className="invertF">
          <img
            className="img1 img3"
            src="/img/VesperAstria3.webp"
            alt="image"
          />
          <p>{data.data1 ? data.data1.about.aboutP3 : "chargement..."}</p>
        </div>
        <div className="sepIcon">
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-genderless fa2" aria-hidden="true"></i>
          <i className="fa fa-genderless fa1" aria-hidden="true"></i>
        </div>
        <p>
          {data.data1 ? data.data1.about.aboutP4 : "chargement..."}
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </p>
        <img className="img2" src="/img/VesperLetter2.webp" alt="image" />
      </div>
    </section>
  );
}
