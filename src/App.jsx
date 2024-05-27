// import logo from './logo.svg';
import './App.css';
//importe de views
import AcercaDeMi from "./views/AcercaDeMi"
import Certificaciones from "./views/Certificaciones"
import Conocimientos from "./views/Conocimientos"
import Contacto from "./views/Contacto"
import Experiencia from "./views/Experiencia"
import Educacion from "./views/Educacion"
import HeaderBar from './components/Header';

import { ToggleButton } from './components/ToggleButton/ToggleButton';
// import Boton from "./components/boton"
import React, { useState, useEffect } from 'react';
import Boton from "./components/Boton"
import imagen from "./vendor/fotoInicio.png"
import Type from "./Type";

function App() {
  
  const [greeting, setGreeting] = useState('');
  const nombre = "Noah Demián Rotbard";

  useEffect(() => {
    const ahora = new Date();
    const hora = ahora.getHours();
    if (hora >= 6 && hora < 12) {
      setGreeting('¡Buenos días!');
    } else if (hora >= 12 && hora < 18) {
      setGreeting('¡Buenas tardes!');
    } else {
      setGreeting('¡Buenas noches!');
    }
  }, []);

  const [isLight, setIsLight] = useState(false);
  return (
    <>
      <div id="all" data-theme={isLight ? "dark" : "light"}>
        <header>
          
          <ToggleButton 
              isChecked={isLight}
              handleChange = {() => setIsLight(!isLight)}
            />
            <HeaderBar/>
        </header>
        <main>
          <div className='inicioSaludo'>
            <div class="izquierda">
              <div className='saludo'>
                <h2>{greeting}</h2>
              </div>
              <div className='nombreYDescripcion'>
                <h1>Soy {nombre}</h1>
                <p>Estudiante de ORT Argentina y Futuro <Type/></p>
              </div>
              <div id="boton">
                <Boton id="botonContact" texto="Contactame!" destino="#contacto" />
              </div>
            </div>
            <div class="divDer">
              <img src={imagen} alt="gran computadora"/>
            </div>
          </div>
          <svg id="contOla1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path id="ola1" fill-opacity="1" d="M0,224L20,218.7C40,213,80,203,120,186.7C160,171,200,149,240,128C280,107,320,85,360,96C400,107,440,149,480,144C520,139,560,85,600,101.3C640,117,680,203,720,245.3C760,288,800,288,840,256C880,224,920,160,960,149.3C1000,139,1040,181,1080,202.7C1120,224,1160,224,1200,208C1240,192,1280,160,1320,160C1360,160,1400,192,1420,208L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
          </svg>
          <AcercaDeMi nombre={nombre} />
          <Conocimientos />
          <Experiencia />
          <Educacion />
          <Certificaciones />
          <Contacto />
        </main>
      </div>
    </>
  );
}

export default App;