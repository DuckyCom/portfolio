import boton from "../../components/Boton"
import titulo from "../../components/Titulo"
import style from "./style.jsx"
import imagenDesarrollo from "../../vendor/web-programming.svg"
import imagenUiUx from "../../vendor/ui-ux.svg"
import imagenApp from "../../vendor/app-development.svg"


const Conocimientos = () => {
    return(
        <div id="conocimientos">
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
    )
};

export default Conocimientos;