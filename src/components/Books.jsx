/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function Books(data) {
  console.log(data.data1.books);
  /*DOM*/
  return (
    <section className="intro" id="livres">
      <div className="subIntro2 introLeft2 ">
        <a href={data.data ? data.data.links.menu0L : "chargement..."}>
          <div className="bookWrap">
            <div className="book">
              <img className="cover" src="/img/darkZodiac.webp" alt="image" />
              <div className="spine" />
            </div>
          </div>
        </a>

        <div className="subIntro2 introRight2">
          <p>{data.data1 ? data.data1.intro.p1 : "chargement..."}</p>
          <p>{data.data1 ? data.data1.intro.p2 : "chargement..."}</p>
          <p>{data.data1 ? data.data1.intro.p3 : "chargement..."}</p>
          <p>{data.data1 ? data.data1.intro.p4 : "chargement..."}</p>
          <p>{data.data1 ? data.data1.intro.p5 : "chargement..."}</p>
        </div>
      </div>
    </section>
  );
}
