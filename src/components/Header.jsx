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
          <li><a href="#work">Our Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

  );
}
