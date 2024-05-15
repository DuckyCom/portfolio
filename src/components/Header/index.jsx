/*const HeaderBar = (props) =>{

    const nombres = [
        "Acerca de mi",
        "Conocimientos",
        "Experiencia",
        "Educación",
        "Certificaciones",
        "Contacto"
    ]

    // Aca hay que hacer una funcion que corte cada uno de los array y que para cada uno te redirija a un link diferente. Por ejemplo, el Acerca de Mi a un "/acercademi".

    return(
        <div>
            <ul>
                <li></li>            
            </ul>
        </div>
    );
}

export default HeaderBar;*/
import React, { useEffect, useState } from 'react';
import './HeaderBar.css';

function HeaderBar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <div className="navbar-brand">
            <a href="#page-top">Noah Rotbard</a>
          </div>
          <div className="navbar-nav-wrapper">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#acerca">Acerca de Mi</a></li>
              <li className="nav-item"><a className="nav-link" href="#conocimientos">Conocimientos</a></li>
              <li className="nav-item"><a className="nav-link" href="#experiencia">Experiencia</a></li>
              <li className="nav-item"><a className="nav-link" href="#educacion">Educación</a></li>
              <li className="nav-item"><a className="nav-link" href="#certificaciones">Certificaciones</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        id="scrolltop"
        style={{
          visibility: scrollTopVisible ? 'visible' : 'hidden',
          opacity: scrollTopVisible ? 1 : 0
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Scroll to Top
      </button>
    </>
  );
}

export default HeaderBar;






