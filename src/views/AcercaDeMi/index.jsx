import React from 'react';
import './style.css'; // Asegúrate de importar los estilos si es necesario
import boton from "../../components/Boton";
import titulo from "../../components/Titulo";
import imagen from "../../vendor/noah.jpg";
import "./style.css";

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
            <svg id="contOla2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path id="ola2" fill-opacity="1" d="M0,224L21.8,192C43.6,160,87,96,131,90.7C174.5,85,218,139,262,149.3C305.5,160,349,128,393,138.7C436.4,149,480,203,524,202.7C567.3,203,611,149,655,133.3C698.2,117,742,139,785,165.3C829.1,192,873,224,916,208C960,192,1004,128,1047,117.3C1090.9,107,1135,149,1178,160C1221.8,171,1265,149,1309,122.7C1352.7,96,1396,64,1418,48L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
            </svg>
        </div>
        
    )
};

export default AcercaDeMi;
