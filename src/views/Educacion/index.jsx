import style from "./style.css"
import logoORT from "../../vendor/logoORT.png"


const Educacion = () => {
    return(
        <div>
            <div id="educacion">
                <div className="titulo">
                    <h1>Educación</h1>
                </div>
                <div id="cardsContainer">
                    <div class="card1">
                        <img className="cardImg" src={logoORT} alt="logoORT"/>
                        <div class="card__content">
                            <p class="card__title">ORT Argentina</p>
                            <p class="card__description">La cursada fue desde 2019 a 2024. Pasando por la orientación de Informática. Al finalizar mi ciclo por la escuela, me gradué con el título de Bachillerato con certificación jurisdiccional en Diseño y Desarrollo de Aplicaciones Web y Móviles</p>
                        </div>
                    </div>
                    <div class="card1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                        </svg>
                        <div class="card__content">
                            <p class="card__title">Universidad</p>
                            <p class="card__description">Por definir</p>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path id="ola5" fill-opacity="1" d="M0,288L18.5,277.3C36.9,267,74,245,111,202.7C147.7,160,185,96,222,80C258.5,64,295,96,332,112C369.2,128,406,128,443,117.3C480,107,517,85,554,96C590.8,107,628,149,665,192C701.5,235,738,277,775,277.3C812.3,277,849,235,886,213.3C923.1,192,960,192,997,160C1033.8,128,1071,64,1108,80C1144.6,96,1182,192,1218,229.3C1255.4,267,1292,245,1329,202.7C1366.2,160,1403,96,1422,64L1440,32L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
            </svg>
        </div>
    )
};

export default Educacion;