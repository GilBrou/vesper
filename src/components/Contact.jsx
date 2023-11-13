/******CONTACT MODULE******/

export default function Contact(data) {
  /*DOM*/
  return (
    <section id="contact" className="contact">
      <div className="contactText">
        <img className="img2" src="/img/VesperLetter2.webp" alt="image" />
        <p>{data.data1 ? data.data1.contact.contactPara : "chargement..."}</p>
        <a
          href={data.data1 ? data.data1.contact.mail : "chargement..."}
          target="Blank_"
        >
          {data.data1 ? data.data1.contact.contactButton : "chargement..."}
        </a>
      </div>
    </section>
  );
}
