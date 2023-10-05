/******HEADER MODULE******/

/***GENERAL***/
/*import { Link } from "react-router-dom";*/

/***COMPONENT***/
export default function Header(data) {
  

  /*DOM*/
  return (
  

    
       <header className="header">
        <a  id="titleNav" href="/accueil">
        Vesper Astria
      </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
        <ul className="menu">
          <li><a href="">À propos</a></li>
          <li><a href="">Consultations</a></li>
          <li><a href="">Livres</a></li>          
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </header>

  );
}
