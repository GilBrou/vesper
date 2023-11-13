/******CONTACT MODULE******/

export default function Contact(data) {
  /*DOM*/
  return (
    <section id="contact" className="contact">
      <div className="contactText">
        <img className="img2" src="/img/VesperLetter2.webp" alt="image" />
        <p>
          {data.data1 ? data.data1.contact.CpacontactPara : "chargement..."}Vous
          pouvez me contacter en précisant l'offre d'astrologie ou de
          cartomancie qui vous intéresse, ainsi que les éléments s'y rapportant
          (Date, heure, lieu de naissance / photo / domaines), je vous répondrai
          alors dans les plus brefs délais afin que nous puissions échanger et
          préparer votre consultation ou votre thème astral
        </p>

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
