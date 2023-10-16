/******INTRO MODULE******/
/*import {VesperPhoto} from "../../public/img/VesperAstria.webp"*/

/***COMPONENT***/
export default function Intro(data) {
  console.log(data.data1);
  /*DOM*/
  return (
    <section className="intro">
  
      <div className="subIntro introLeft">
      <img src="/img/VesperAstria.webp" alt="image" />
        </div>
      
      <div className="subIntro introRight">      
        <p>Autrice
          et rêveuse à plein temps, je propose en taromancie des guidances
          générales en ligne sur ma chaîne YouTube mais également des guidances
          privées à distance et des thèmes astraux.</p>
          <p>
          Vesper Astria signifie l’étoile du soir. Cette nuit que l’on porte
          tou.te.s en nous, que la société ne laisse pas devenir jour, et dans
          laquelle brille l’étoile de votre âme : votre identité.</p>
                <p>Une nuit que
          l’on ne vit pas toujours très bien, ou que l’on ne regarde jamais
          parce qu’on nous a dit de garder sa fenêtre fermée.</p><p> Vous en avez tous
          une qui attend que vous la fassiez exister, briller.</p><p>Bienvenue chez
          moi, et surtout chez vous, dans le ciel des étoiles du soir. 
        </p></div>

    </section>
  );
}
