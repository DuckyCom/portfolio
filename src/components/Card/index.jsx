import './style.css'
import imagenFullStack from '../../vendor/full-stack.svg';
import Card from 'react-bootstrap/Card';

const Cardd = (props) => {
  return (
    <Card className='card'>
        <Card.Header>
            <h1>Desarrollador Full Stack</h1>
            <h3>ORT Argentina 2024 - actualidad</h3>    
            <img src={imagenFullStack} alt="logoFullStack" /> 
        </Card.Header>
    <Card.Body>
        <Card.Text>
            {props.texto1}
        </Card.Text>
        <Card.Text>
            {props.texto2}
        </Card.Text>
        <Card.Text>
            {props.texto3}
        </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default Card;