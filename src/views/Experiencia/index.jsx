import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagenFullStack from '../../vendor/full-stack.svg';
import imagenWEB from '../../vendor/web-programming.svg';
import './style.css'

const Experiencia = () => {
    return(
        <div className="experiencia">
            <div className="tituloExp">
                <h1>Experiencia</h1>
            </div>
            <div className="rowExperiencia">
                {/* <div className="card"> */}
                    <Card>
                        <Card.Header>
                            <h1>Desarrollador Full Stack</h1>
                            <h3>ORT Argentina 2024 - actualidad</h3>    
                            <img src={imagenFullStack} alt="logoFullStack" /> 
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Trabajé durante 2 años en el rediseño funcional del sistema informático de Wadiah Capital. Comencé a cargo de un módulo que realiza una integración con servicios crypto, para luego quedar a cargo del core bancario.
                            </Card.Text>
                            <Card.Text>
                                El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure.
                            </Card.Text>
                            <Card.Text>
                                Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea
                            </Card.Text>
                        </Card.Body>
                    </Card>
                {/* </div> */}
                {/* <div className="card"> */}
                    <Card>
                        <Card.Header>
                            <h1>Desarrollador WEB</h1>
                            <h3>ORT Argentina 2024 - actualidad</h3>    
                            <img src={imagenWEB} alt="logoWeb" /> 
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
                            </Card.Text>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
                            </Card.Text>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                {/* </div> */}
            </div>
        </div>
    )
};

export default Experiencia;