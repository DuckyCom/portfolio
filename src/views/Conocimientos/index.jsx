import boton from "../../components/Boton";
import titulo from "../../components/Titulo";
import "./style.css";
import imagenDesarrollo from "../../vendor/web-programming.svg";
import imagenUiUx from "../../vendor/ui-ux.svg";
import imagenApp from "../../vendor/app-development.svg";
import ola from "../../vendor/wave3.svg";

const Conocimientos = () => {
    return(
        <div>
            <div id="conocimientos" className="conocimientos-container">
                <div className="titulo">
                    <h1>Conocimientos</h1>
                </div>
                <div className="rowConocimientos">
                    <div className="conocimientosImgText">
                        <img src={imagenDesarrollo} alt="ImagenDesarrollo" />
                        <h5>Desarrollo WEB</h5>
                    </div>
                    <div className="conocimientosImgText">
                        <img src={imagenApp} alt="ImagenAPP" />
                        <h5>Desarrollo de APP's</h5>
                    </div>
                    <div className="conocimientosImgText">
                        <img src={imagenUiUx} alt="ImagenUxUi" />
                        <h5>UX/UI</h5>
                    </div>
                </div>
            </div>
            <img class="ola3" src={ola} alt="ola3"/>
        </div>
    )
};

export default Conocimientos;
