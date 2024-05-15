import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Experiencia = () => {
    return(
        <div id="experiencia">
            <div className="rowExperiencia">
                <div className="card">
                    <Card>
                        <Card.Header>
                            <h1>Desarrollador Full Stack</h1>
                            <h3>Nombre Empresa 2025 - actualidad</h3>    
                            <img src="ponerimagen" alt="logoFullStack" /> 
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
                </div>
            </div>
        </div>
    )
};

export default Experiencia;