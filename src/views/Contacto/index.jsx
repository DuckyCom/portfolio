import style from "./style.css"

const Contacto = () => {
    return(
        <div className="contacto" id="contacto">
            <div class="form-container">
                <div class="form">
                    <span class="heading">¡Contactame aquí!</span>
                    <input placeholder="Nombre" type="text" class="input"/>
                    <input placeholder="Email" id="mail" type="email" class="input"/>
                    <textarea placeholder="Escribe tu mensaje aquí..." rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                    <div class="button-container">
                        <div class="send-button">Enviar</div>
                        <div class="reset-button-container">
                            <div id="reset-btn" class="reset-button">Borrar</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="textAlLado">
                <div className="txt">
                    <h5 className="tituloTxt">¡Escribeme si necesitas algo!</h5>
                    <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
                    <p>¡Gracias por ver mi sitio WEB!</p>
                </div>
            </div>
        </div>
    )
};

export default Contacto;