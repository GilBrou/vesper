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
              <h1>
                {data.data1 ? data.data1.consult.C1Text : "chargement..."}
              </h1>
              <p class="subCard">
                {data.data1 ? data.data1.consult.C1Text2 : "chargement..."}
              </p>
              {/*<span className="price"></span>*/}
              <div className="card-back">
                <a href={data.data ? data.data.links.menu4L : "chargement..."}>
                  {data.data1 ? data.data1.consult.C1Price : "chargement..."}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-b">
              <h1>
                {data.data1 ? data.data1.consult.C2Text : "chargement..."}
              </h1>
              <p class="subCard">
                {data.data1 ? data.data1.consult.C2Text2 : "chargement..."}
              </p>
              <div className="card-back">
                <a href={data.data ? data.data.links.menu4L : "chargement..."}>
                  {data.data1 ? data.data1.consult.C2Price : "chargement..."}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-c">
              <h1>
                {data.data1 ? data.data1.consult.C3Text : "chargement..."}
              </h1>
              <p class="subCard">
                {data.data1 ? data.data1.consult.C3Text2 : "chargement..."}
              </p>
              <div className="card-back">
                <a href={data.data ? data.data.links.menu4L : "chargement..."}>
                  {data.data1 ? data.data1.consult.C3Price : "chargement..."}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            <div className="cover item-d">
              <h1>
                {data.data1 ? data.data1.consult.C4Text : "chargement..."}
              </h1>
              <p class="subCard">
                {data.data1 ? data.data1.consult.C4Text2 : "chargement..."}
              </p>
              <div className="card-back">
                <a href={data.data ? data.data.links.menu4L : "chargement..."}>
                  {data.data1 ? data.data1.consult.C4Price : "chargement..."}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
