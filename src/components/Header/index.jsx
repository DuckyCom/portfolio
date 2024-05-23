import React, { useEffect, useState } from 'react';
import './HeaderBar.css';
import { Toggle } from '../../components/ToggleButton';

function HeaderBar() { /*voy a hacer un gran cambio*/
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

  
// navbar-expand-lg bg-secondary text-uppercase fixed-top
  return (
    <>
      <nav className="navbar" id="mainNav">
        <div className="container">
          <div className="navbar-brand">
            <a href="#top">NOAH ROTBARD</a>
          </div>
          <div className="navbar-nav-wrapper">
            <ul className="navbar-nav2">
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
          opacity: scrollTopVisible ? 1 : 0,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Volver para arriba 
      </button>
    
    </>
    
  );
}


export default HeaderBar;






