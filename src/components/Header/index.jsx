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
import React from 'react'

function HeaderBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">Home</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default HeaderBar;