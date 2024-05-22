import React from 'react';
import './style.css'; // Asegúrate de importar los estilos si es necesario
import boton from "../../components/Boton";
import titulo from "../../components/Titulo";
import imagen from "../../vendor/noah.jfif";
import "./style.css";
import ola from "../../vendor/wave2.svg"
import olaArriba from "../../vendor/wave.svg";

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
        <div>
            <div id="acerca">
                <div className="subDivAcerca">
                    <div>
                        <h2>Buenas! Me llamo {props.nombre}</h2>
                        <p>Soy estudiante de la escuela ORT Argentina, próximo estudiante de la carrera de Ingeniería en Informática. Soy una persona muy abierta a la hora de aprender, me encanta poder adquirir habilidades de diferentes trabajos.</p>
                        <p>Edad: {edad}</p>
                        <p>Mail: {mail}</p>
                    </div>
                </div>
                <div class="subDivAcerca">
                    <img src={imagen} alt="img-perfil" />
                </div>
            </div>
            <img class="ola2" src={ola} alt="ola"/>
        </div>
        
    )
};

export default AcercaDeMi;
