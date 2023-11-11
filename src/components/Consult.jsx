/******CONSULT MODULE******/
/*col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12*/
/***COMPONENT***/
export default function Consult(data) {
  /*DOM*/
  return (
    <section className="consult" id="consultations">
      <div className="allCards">
        <div className="card">
          <div className="cover item-a">
            <h1>{data.data1 ? data.data1.consult.C1Text : "chargement..."}</h1>
            <p className="subCard">
              {data.data1 ? data.data1.consult.C1Text2 : "chargement..."}
            </p>
            {/*<span className="price"></span>*/}
            <div className="card-back">
              <a href={data.data1 ? data.data1.links.menu4L : "chargement..."}>
                {data.data1 ? data.data1.consult.C1Price : "chargement..."}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cover item-b">
            <h1>{data.data1 ? data.data1.consult.C2Text : "chargement..."}</h1>
            <p className="subCard">
              {data.data1 ? data.data1.consult.C2Text2 : "chargement..."}
            </p>
            <div className="card-back">
              <a href={data.data1 ? data.data1.links.menu4L : "chargement..."}>
                {data.data1 ? data.data1.consult.C2Price : "chargement..."}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cover item-c">
            <h1>{data.data1 ? data.data1.consult.C3Text : "chargement..."}</h1>
            <p className="subCard">
              {data.data1 ? data.data1.consult.C3Text2 : "chargement..."}
            </p>
            <div className="card-back">
              <a href={data.data1 ? data.data1.links.menu4L : "chargement..."}>
                {data.data1 ? data.data1.consult.C3Price : "chargement..."}
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cover item-d">
            <h1>{data.data1 ? data.data1.consult.C4Text : "chargement..."}</h1>
            <p className="subCard">
              {data.data1 ? data.data1.consult.C4Text2 : "chargement..."}
            </p>
            <div className="card-back">
              <a href={data.data1 ? data.data1.links.menu4L : "chargement..."}>
                {data.data1 ? data.data1.consult.C4Price : "chargement..."}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="consulText introRight">
        {/*<p>{data.data1 ? data.data1.intro.p1 : "chargement..."}</p>*/}
        <p className="underlP">Astrologie</p>
        <p>
          Pour toutes les offres en astrologie, j’aurais besoin de votre heure
          et lieu de naissance exactes. Vous pouvez également me soumettre des
          photos ou votre date de naissance pour une visualisation plus précise.
        </p>
        <p className="underlP">Cartomancie</p>
        <p>
          Une fois réglées, les tirages privés à distance sont filmés rien que
          pour vous puis sont envoyées sur votre boite mail via un lien
          sécurisé. Je propose également des guidances générales en ligne sur ma{" "}
          <a
            href={data.data ? data.data.links.menu6L : "chargement..."}
            target="Blank_"
          >
            chaîne YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
