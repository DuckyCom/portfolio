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
import ola from './vendor/wave-bg.svg';


// import Boton from "./components/boton"
import React, { useState, useEffect } from 'react';
import Boton from "./components/Boton"
import imagen from "./vendor/fotoInicio.png"

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


  return (
    <>
      <header>
        <HeaderBar />
      </header>
      <main>
        <div className='inicioSaludo'>
          <div class="izquierda">
            <div className='saludo'>
              <h2>{greeting}</h2>
            </div>
            <div className='nombreYDescripcion'>
              <h1>Soy {nombre}</h1>
              <p>Estudiante de ORT Argentina y Futuro Desarrollador FullStack</p>
            </div>
            <div id="boton">
              <Boton id="botonContact" texto="Contactame!" destino="#contacto" />
            </div>
          </div>
          <div class="divDer">
            <img src={imagen} alt="gran computadora"/>
          </div>
        </div>
        <img id="ola" src={ola} alt="ola"/>
        <AcercaDeMi nombre={nombre} />
        <Conocimientos />
        <Experiencia />
        <Educacion />
        <Certificaciones />
        <Contacto />
      </main>
      
    </>
  );
}

export default App;