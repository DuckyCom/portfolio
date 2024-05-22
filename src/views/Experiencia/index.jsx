import Button from 'react-bootstrap/Button';
import titulo from "../../components/Titulo";
import imagenFullStack from '../../vendor/full-stack.svg';
import imagenWEB from '../../vendor/web-programming.svg';
import './style.css'
import cardIndex from '../../components/Card';

import { Card, Row, Col, Container } from 'react-bootstrap';

import ola from '../../vendor/wave4.svg';


const Experiencia = () => {
    return (
        <>
            <div id="experiencia">
                <div className="titulo">
                    <h1>Experiencia</h1>
                </div>
                <Container>
                    
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <div>
                                        <h3 className="h5 mb-1">Desarrollador Full Stack</h3>
                                        <div className="text-muted text-small">ORT Argentina 2024 - actualidad</div>
                                    </div>
                                    <img src={imagenFullStack} alt="Desarrollo WEB" className="img-fluid standard-image-size" />
                                </div>
                                <div className="card-body">
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus cursus urna, ut finibus mi rutrum a. Cras placerat ornare dictum. Nulla facilisi. Aenean varius vehicula lacus nec elementum. Morbi scelerisque tellus id ex elementum, id congue neque porta. Maecenas aliquet sagittis nibh, ut sagittis est commodo eget. Cras purus quam, posuere et cursus nec, cursus vitae nibh. Vivamus a porta turpis, id porta ante. Proin feugiat ex ac risus maximus, quis euismod risus porttitor. Quisque eget varius turpis. Aliquam egestas leo quis justo ultrices, sit amet aliquam libero tincidunt. Morbi congue lorem at enim dictum maximus. Vestibulum at sodales nisi, sit amet rutrum urna.</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <div>
                                        <h3 className="h5 mb-1">Desarrollador WEB1</h3>
                                        <div className="text-muted text-small">ORT Argentina 2024 - actualidad</div>
                                    </div>
                                    <img src={imagenWEB} alt="Desarrollo WEB" className="img-fluid standard-image-size" />
                                </div>
                                <div className="card-body">
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus cursus urna, ut finibus mi rutrum a. Cras placerat ornare dictum. Nulla facilisi. Aenean varius vehicula lacus nec elementum. Morbi scelerisque tellus id ex elementum, id congue neque porta. Maecenas aliquet sagittis nibh, ut sagittis est commodo eget. Cras purus quam, posuere et cursus nec, cursus vitae nibh. Vivamus a porta turpis, id porta ante. Proin feugiat ex ac risus maximus, quis euismod risus porttitor. Quisque eget varius turpis. Aliquam egestas leo quis justo ultrices, sit amet aliquam libero tincidunt. Morbi congue lorem at enim dictum maximus. Vestibulum at sodales nisi, sit amet rutrum urna.</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-4">
                                <div className="card-header d-flex justify-content-between">
                                    <div>
                                        <h3 className="h5 mb-1">Desarrollador WEB2</h3>
                                        <div className="text-muted text-small">ORT Argentina 2024 - actualidad</div>
                                    </div>
                                    <img src={imagenWEB} alt="Desarrollo WEB" className="img-fluid standard-image-size" />
                                </div>
                                <div className="card-body">
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus cursus urna, ut finibus mi rutrum a. Cras placerat ornare dictum. Nulla facilisi. Aenean varius vehicula lacus nec elementum. Morbi scelerisque tellus id ex elementum, id congue neque porta. Maecenas aliquet sagittis nibh, ut sagittis est commodo eget. Cras purus quam, posuere et cursus nec, cursus vitae nibh. Vivamus a porta turpis, id porta ante. Proin feugiat ex ac risus maximus, quis euismod risus porttitor. Quisque eget varius turpis. Aliquam egestas leo quis justo ultrices, sit amet aliquam libero tincidunt. Morbi congue lorem at enim dictum maximus. Vestibulum at sodales nisi, sit amet rutrum urna.</Card.Text>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
        <img id="ola4" src={ola} alt="ola4"/>
        </>
    )
};





export default Experiencia;

// const Experiencia = () => {
//     return(
//         <>
//         <div className="experiencia" id='experiencia'>
//             <div className="tituloExp">
//                 <h1>Experiencia</h1>
//             </div>
//             <div id="contenedorDeDivs">
//             <div className="rowExperiencia">
//                 <div className="column"> 
//                     <Card className='card'>
//                         <Card.Header>
//                             <h1>Desarrollador Full Stack</h1>
//                             <h3>ORT Argentina 2024 - actualidad</h3>    
//                             <img src={imagenFullStack} alt="logoFullStack" /> 
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>
//                                 Trabajé durante 2 años en el rediseño funcional del sistema informático de Wadiah Capital. Comencé a cargo de un módulo que realiza una integración con servicios crypto, para luego quedar a cargo del core bancario.
//                             </Card.Text>
//                             <Card.Text>
//                                 El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure.
//                             </Card.Text>
//                             <Card.Text>
//                                 Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 {/* </div> 
//                 <div className="card"> */}
//                     <Card>
//                         <Card.Header>
//                             <h1>Desarrollador WEB1</h1>
//                             <h3>ORT Argentina 2024 - actualidad</h3>    
//                             <img src={imagenWEB} alt="logoWeb" /> 
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                     </div> 
//                     <div className="column"> 
//                     <Card>
//                         <Card.Header>
//                             <h1>Desarrollador WEB</h1>
//                             <h3>ORT Argentina 2024 - actualidad</h3>    
//                             <img src={imagenWEB} alt="logoWeb" /> 
//                         </Card.Header>
//                         <Card.Body>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sapien eros. Curabitur ullamcorper tellus lacus, et interdum mi dictum quis. Praesent eget sapien erat. Morbi pretium feugiat ligula vitae ullamcorper. Curabitur tempus sapien sed lacus pulvinar, quis aliquam mauris porta. Nulla risus erat, varius sodales rhoncus sed, tincidunt vel nibh. Suspendisse a eros vel lacus faucibus dictum sit amet et felis. Nullam eget pulvinar neque, at accumsan magna. Nam posuere nunc nec ex semper tristique.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div> 
//             </div>
//             </div>
//         </div>
//         </>
//     )
// };
