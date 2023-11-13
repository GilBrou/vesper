/******CONTACT MODULE******/

/***COMPONENT***/
export default function Contact(data) {
  /*
        
        */
  /*DOM*/
  return (
    <section id="contact" className="contact">
      <div className="contactText">
       <p className="contacTitle">
          {data.data1 ? data.data1.consult.Ctitle1 : "chargement..."}
        </p>
        <p>{data.data1 ? data.data1.consult.Cpara1 : "chargement..."}</p>
        <p className="contacTitle">
          {" "}
          {data.data1 ? data.data1.consult.Ctitle2 : "chargement..."}
        </p>
        <p>
          {data.data1 ? data.data1.consult.Cpara2 : "chargement..."}
          <a
            href={data.data1 ? data.data1.links.menu6L : "chargement..."}
            target="Blank_"
          >
            {data.data1 ? data.data1.consult.Cpara3 : "chargement..."}
          </a>
        </p>
      </div>
    </section>
  );
}
