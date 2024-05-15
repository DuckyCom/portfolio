import titulo from "../Titulo"
import './style.css'

const Boton = (props) => {
    return(
        <div>
            <a href={props.destino}><button class="relleno hover-effect" variant="dark">{props.texto}</button></a>
        </div>

    )
};

export default Boton;