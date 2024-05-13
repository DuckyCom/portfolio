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

// import Boton from "./components/boton"
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para almacenar el saludo
  const [greeting, setGreeting] = useState('');
  const nombre = "Noah Demián Rotbard";

  useEffect(() => {
    // Obtener la fecha actual
    const ahora = new Date();
    // Obtener la hora de la hora local
    const hora = ahora.getHours();
    // Saludar al usuario dependiendo de la hora del día
    if (hora >= 6 && hora < 12) {
        setGreeting('¡Buenos días!');
    } else if (hora >= 12 && hora < 18) {
        setGreeting('¡Buenas tardes!');
    } else {
        setGreeting('¡Buenas noches!');
    }
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  return (
    <>
    <HeaderBar/>
    <div className='inicioSaludo'>
      <div className='saludo'>
        <h2>{greeting}</h2>
      </div>
      <div className='nombreYDescripcion'>
        <h1>Soy {nombre}</h1>
        <p>Estudiante de ORT Argentina y Futuro Desarrollador FullStack</p>
      </div>

      
    </div>
      <AcercaDeMi nombre={nombre}/>
      <Conocimientos/>
      <Experiencia/>
      <Educacion/>
      <Certificaciones/>
      <Contacto/>
    </>
  );
}

export default App;

