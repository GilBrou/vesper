/******CONTACT MODULE******/

export default function Contact(data) {
  /*DOM*/
  return (
    <section id="contact" className="contact">
      <div className="contactText">
        <p>
          {data.data1 ? data.data1.contact.CpacontactPara : "chargement..."}
        </p>

        <p className="contacTitle">
          <a
            href={
              data.data1 ? data.data1.contact.contactButton : "chargement..."
            }
            target="Blank_"
          ></a>
        </p>
      </div>
    </section>
  );
}
