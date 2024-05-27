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
                                    <svg className="expImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                                        <path d="M456 79.93h-36.216c-3.32-6.016-8.408-11.04-14.816-14.08L281.88 7.546c-21.048-9.968-46.72-9.968-67.768 0L91.04 65.85c-6.416 3.04-11.496 8.056-14.816 14.08H40c-22.056 0-40 17.944-40 40v288c0 22.056 17.944 40 40 40h104v32h-32v16h272v-16h-32v-32h104c22.056 0 40-17.944 40-40v-288c0-22.056-17.944-40-40-40zm-358.12.384L220.96 22.01A63.613 63.613 0 01248 15.93c9.288 0 18.64 2.104 27.04 6.08l123.08 58.304c6 2.84 9.88 8.968 9.88 15.616s-3.88 12.776-9.88 15.616L275.04 169.85c-16.8 7.952-37.28 7.952-54.08 0L97.88 111.546c-6-2.84-9.88-8.968-9.88-15.616s3.88-12.776 9.88-15.616zM275.032 249.85c-16.768 7.96-37.288 7.96-54.072 0L97.88 191.546c-6-2.84-9.88-8.968-9.88-15.616s3.88-12.776 9.88-15.624l32.784-15.528 83.448 39.536c10.528 4.984 22.248 7.616 33.888 7.616s23.36-2.632 33.88-7.616l83.448-39.536 32.776 15.528c6.016 2.848 9.896 8.976 9.896 15.624s-3.88 12.776-9.88 15.616L275.032 249.85zm90.296-25.072l32.776 15.528c6.016 2.848 9.896 8.976 9.896 15.624 0 6.64-3.88 12.776-9.88 15.624L275.032 329.85c-16.768 7.952-37.288 7.952-54.072 0L97.888 271.554C91.88 268.706 88 262.57 88 255.93c0-6.648 3.88-12.776 9.88-15.624l32.784-15.528 83.448 39.528c10.52 4.992 22.232 7.624 33.888 7.624s23.368-2.632 33.88-7.624l83.448-39.528zM336 479.93H160v-32h176v32zm144-72c0 13.232-10.768 24-24 24H40c-13.232 0-24-10.768-24-24v-8h464v8zm0-24H16v-264c0-13.232 10.768-24 24-24h32c0 12.8 7.48 24.6 19.04 30.08l20.936 9.92-20.944 9.92C79.472 151.33 72 163.138 72 175.93c0 12.8 7.48 24.6 19.04 30.08l20.936 9.92-20.952 9.92C79.472 231.33 72 243.138 72 255.93s7.472 24.592 19.04 30.08l123.072 58.296c10.52 4.992 22.232 7.624 33.888 7.624s23.368-2.632 33.88-7.624l123.088-58.296c11.56-5.488 19.032-17.288 19.032-30.08s-7.472-24.6-19.04-30.08l-20.944-9.92 20.944-9.92c11.56-5.48 19.04-17.28 19.04-30.08 0-12.792-7.472-24.6-19.04-30.08l-20.944-9.92 20.944-9.92c11.56-5.48 19.04-17.28 19.04-30.08h32c13.232 0 24 10.768 24 24v264z"/><path d="M248 127.93c22.056 0 40-14.352 40-32s-17.944-32-40-32-40 14.352-40 32 17.944 32 40 32zm0-48c13.008 0 24 7.328 24 16s-10.992 16-24 16-24-7.328-24-16 10.992-16 24-16zM304 87.93h16v16h-16zM336 87.93h16v16h-16zM176 87.93h16v16h-16zM144 87.93h16v16h-16z"/>
                                    </svg>
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
                                    <svg className="expImg" viewBox="0 -25 424 424" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/>
                                        <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/>
                                        <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/>
                                        <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/>
                                        <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/>
                                        <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                        <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/>
                                        <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                    </svg>
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
                                    <svg className="expImg" viewBox="0 -25 424 424" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0"/>
                                        <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0"/>
                                        <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0"/>
                                        <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0"/>
                                        <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0"/>
                                        <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                        <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0"/>
                                        <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0"/>
                                    </svg>
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
