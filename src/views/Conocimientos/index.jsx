import boton from "../../components/Boton";
import titulo from "../../components/Titulo";
import "./style.css";
import imagenDesarrollo from "../../vendor/web-programming.svg";
import imagenUiUx from "../../vendor/ui-ux.svg";
import imagenApp from "../../vendor/app-development.svg";

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
            {/*<img class="ola3" src={ola} alt="ola3"/>*/}
            <svg id="contOla3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path id="ola3" fill-opacity="1" d="M0,224L20,218.7C40,213,80,203,120,186.7C160,171,200,149,240,128C280,107,320,85,360,96C400,107,440,149,480,144C520,139,560,85,600,101.3C640,117,680,203,720,245.3C760,288,800,288,840,256C880,224,920,160,960,149.3C1000,139,1040,181,1080,202.7C1120,224,1160,224,1200,208C1240,192,1280,160,1320,160C1360,160,1400,192,1420,208L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
            </svg>
        </div>
    )
};

export default Conocimientos;
