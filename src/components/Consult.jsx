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
        <p className="underlP">
          {data.data1 ? data.data1.consult.Ctitle1 : "chargement..."}
        </p>
        <p>{data.data1 ? data.data1.consult.Cpara1 : "chargement..."}</p>
        <p className="underlP">
          {" "}
          {data.data1 ? data.data1.consult.Ctitle2 : "chargement..."}
        </p>
        <p>
          {data.data1 ? data.data1.consult.Cpara2 : "chargement..."}
          <a
            href={data.data ? data.data.links.menu6L : "chargement..."}
            target="Blank_"
          >
            {data.data1 ? data.data1.consult.Cpara3 : "chargement..."}
          </a>
        </p>
      </div>
    </section>
  );
}
