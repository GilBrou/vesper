/******HEADER MODULE******/

/***COMPONENT***/
export default function Header(data) {
  /*DOM*/

  return (
    <header className="header">
      <div>
        <a
          id="titleNav"
          href={data.data ? data.data.links.menu0L : "chargement..."}
        >
          {data.data ? data.data.nom : "chargement..."}
        </a>
        <p className="subL">Tarot & Astrologie</p>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <a href={data.data ? data.data.links.menu0L : "chargement..."}>
            Accueil
          </a>
        </li>
        <li>
          <a href={data.data ? data.data.links.menu1L : "chargement..."}>
            {data.data ? data.data.menu.menu1 : "chargement..."}
          </a>
        </li>

        <li>
          <a href={data.data ? data.data.links.menu2L : "chargement..."}>
            {data.data ? data.data.menu.menu2 : "chargement..."}
          </a>
        </li>

        <li>
          <a href={data.data ? data.data.links.menu3L : "chargement..."}>
            {data.data ? data.data.menu.menu3 : "chargement..."}
          </a>
        </li>

        <li>
          <a href={data.data ? data.data.links.menu4L : "chargement..."}>
            {data.data ? data.data.menu.menu4 : "chargement..."}
          </a>
        </li>

        <li>
          <a
            href={data.data ? data.data.links.menu5L : "chargement..."}
            target="Blank_"
          >
            {data.data ? data.data.menu.menu5 : "chargement..."}
          </a>
        </li>

        <li>
          <a
            href={data.data ? data.data.links.menu6L : "chargement..."}
            target="Blank_"
          >
            <i className={data.data ? data.data.ressources.logoYT : "chargement..."}></i>
          </a>
        </li>


        <li>
          <a
            href={data.data ? data.data.links.menu8L : "chargement..."}
            target="Blank_"
          >
            <i className={data.data ? data.data.ressources.logoIG : "chargement..."}></i>
          </a>
        </li>


        <li>
          <a
            href={data.data ? data.data.links.menu7L : "chargement..."}
            target="Blank_"
          >
            <i className={data.data ? data.data.ressources.logoFB : "chargement..."}></i>
          </a>
        </li>

            





      </ul>
    </header>
  );
}
