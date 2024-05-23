import boton from "../../components/Boton"
import titulo from "../../components/Titulo"

import ola from '../../vendor/wave6.svg';
import "./style.css"

const Certificaciones = () => {
    return(
        <div>
            <div id="certificaciones">
                <div className="titulo">
                    <h1>Certificaciones</h1>                    
                </div>

            </div>
            <img class="ola6" src={ola} alt="ola6"/>
        </div>
    )
};

export default Certificaciones;