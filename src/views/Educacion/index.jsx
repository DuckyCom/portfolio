import boton from "../../components/Boton"
import titulo from "../../components/Titulo"
import style from "./style.css"
import imagenFullStack from '../../vendor/full-stack.svg';
import imagenWEB from '../../vendor/web-programming.svg';

import ola from '../../vendor/wave5.svg';
import Card from 'react-bootstrap/Card';

const Educacion = () => {
    return(
        <div>
            <div id="educacion">
                <div className="titulo">
                    <h1>Educación</h1>
                </div>
                
            </div>
            <img class="ola5" src={ola} alt="ola5"/>
        </div>
    )
};

export default Educacion;