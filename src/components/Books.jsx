/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function Books(data) {
  /*console.log(data.data1.book);*/
  /*DOM*/
  return (
    <section className="" id="livres">
      <div className="subIntro2 introLeft2 ">
        <a
          href={data.data1 ? data.data1.book.extrait : "chargement..."}
          target="Blank_"
        >
          <div className="bookWrap">
            <div className="book">
              <p>Lire un extrait</p>
              <img className="cover" src="/img/darkZodiac.webp" alt="image" />
              <div className="spine" />
            </div>
          </div>
        </a>
        <div className="bookButton">
          <a
            href={data.data1 ? data.data1.book.buyLink : "chargement..."}
            target="Blank_"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>Version
            papier
          </a>
          <a
            href={data.data1 ? data.data1.book.buyLinkEbook : "chargement..."}
            target="Blank_"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>E-book
          </a>
        </div>
        <div className="bookButton bookButton2">
          <a
            href={data.data1 ? data.data1.book.avis : "chargement..."}
            target="Blank_"
          >
           Avis de lecteurs
          </a></div>
      </div>
      <div className="subIntro2 introRight2">
        <div className="rowBook">
          <p>
            {data.data1 ? data.data1.book.title : "chargement..."}{" "}
            {data.data1 ? data.data1.book.subTitle : "chargement..."}
          </p>
        </div>
        <p className="illusT">
          Illustrations :{" "}
          {data.data1 ? data.data1.book.Illustrations : "chargement..."}
        </p>
        <p>{data.data1 ? data.data1.book.Detail1 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.book.Detail2 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.book.Detail3 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.book.Detail4 : "chargement..."}</p>
        <p>{data.data1 ? data.data1.book.Detail5 : "chargement..."}</p>
      </div>
    </section>
  );
}
