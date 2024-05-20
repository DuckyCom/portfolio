import React from 'react';
import './style.css'; // Asegúrate de importar los estilos si es necesario
import boton from "../../components/Boton";
import titulo from "../../components/Titulo";
import imagen from "../../vendor/noah.jfif"

const AcercaDeMi = (props) => {
    // Función para calcular la edad
    function calcularEdad(fechaNacimiento) {
        const fechaNac = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mesActual = hoy.getMonth() + 1;
        const diaActual = hoy.getDate();
        
        if (mesActual < 6 || (mesActual === 6 && diaActual < 22)) {
            edad--;
        }
        
        return edad;
    }

    // Llamada a la función para calcular la edad
    const edad = calcularEdad('2007-06-22');
    const mail = "noahdemianr@gmail.com";

    return(
        <div id="acerca">
            <div className="Descripcion">
                <h2>Buenas! Me llamo {props.nombre}</h2>
                <p>Soy estudiante de la escuela ORT Argentina, próximo estudiante de la carrera de Ingeniería en Informática de la UADE. Soy una persona muy abierta a la hora de aprender, me encanta poder adquirir habilidades de diferentes trabajos.</p>
            </div>
            <div className="edadymail">
                <p>Edad: {edad}</p>
                <p>Mail: {mail}</p>
            </div>
            <img src={imagen} alt="img-perfil" />
        </div>
    )
};

export default AcercaDeMi;
