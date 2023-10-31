/******CONSULT MODULE******/

/***COMPONENT***/
export default function Consult(data) {
  /*console.log(data.data1);*/
  /*DOM*/
  return (
    <section className="consult" id="consultations">
      <div className="row">
        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-a">
              <h1>{data.data1 ? data.data1.consult.C1Text : "chargement..."}</h1>
              <span className="price">{data.data1 ? data.data1.consult.C1Price : "chargement..."}</span>
              <div className="card-back">
                <a href="">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-a">
              <h1>{data.data1 ? data.data1.menu.menu2 : "chargement..."}</h1>
              <span className="price">65€</span>
              <div className="card-back">
                <a href={data.data1 ? data.data1.menu.menu2L : "chargement..."}>
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-a">
              <h1>{data.data1 ? data.data1.menu.menu4 : "chargement..."}</h1>
              <span className="price">100€</span>
              <div className="card-back">
                <a href={data.data1 ? data.data1.menu.menu4L : "chargement..."}>
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
            <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-a">
              <h1>{data.data1 ? data.data1.menu.menu4 : "chargement..."}</h1>
              <span className="price">100€</span>
              <div className="card-back">
                <a href={data.data1 ? data.data1.menu.menu4L : "chargement..."}>
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
