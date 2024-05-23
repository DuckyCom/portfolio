import Button from 'react-bootstrap/Button';
import titulo from "../../components/Titulo";
import imagenFullStack from '../../vendor/full-stack.svg';
import imagenWEB from '../../vendor/web-programming.svg';
import './style.css'
import cardIndex from '../../components/Card';

import { Card, Row, Col, Container } from 'react-bootstrap';



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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path id="ola4" fill-opacity="1" d="M0,128L21.8,138.7C43.6,149,87,171,131,186.7C174.5,203,218,213,262,208C305.5,203,349,181,393,176C436.4,171,480,181,524,197.3C567.3,213,611,235,655,208C698.2,181,742,107,785,90.7C829.1,75,873,117,916,144C960,171,1004,181,1047,154.7C1090.9,128,1135,64,1178,58.7C1221.8,53,1265,107,1309,138.7C1352.7,171,1396,181,1418,186.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        </svg>
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
