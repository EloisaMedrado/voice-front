import React, {useState} from 'react';

import './General.css';
import Api from './Api';
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, FormControl, Tab, Tabs, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

import background from "./img/home2.png";

function Vocabulario() {

    const [data, setData] = useState([]);
 
    return (
        <div>
            <div className="Main" style={{ backgroundImage: `url(${background})` }}>
                <Navbar variant="dark">
                    <Navbar.Brand style={{paddingLeft:'15px', paddingRight: '30%'}} href="/">Voice</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: "white", paddingRight: "1.5rem"}} href="/infos">Enviando infos</Nav.Link>
                        <Nav.Link style={{color: "white", paddingRight: "1.5rem"}} href="/vocabulario">Meu vocabulário</Nav.Link>
                        <Nav.Link style={{color: "white", paddingRight: "1.5rem"}} href="/predicao">Predição</Nav.Link>
                        <Nav.Link style={{color: "white", paddingRight: "1.5rem"}} href="/">Grafo</Nav.Link>
                    </Nav>
                    <Button href="/cadastro" style={{marginRight:'15px'}} variant="outline-info">Cadastre-se</Button>
                    <Button href="/login" variant="outline-info">Login</Button>
                </Navbar>
            </div>

            <div class="conteudo">
                <h3>Vocabulário:</h3>
                {data ? (
                    <ul>
                        {
                            Object.keys(data).map(chave => {
                                return (
                                    <div>
                                        <li>{chave}</li>
                                        <ul>
                                            {data[chave].map((elemento, key) => {
                                                return (
                                                    <div>
                                                        <li>{elemento}</li>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </ul>
                ) : null}
            </div>
        </div>
        
    );
}

export default Vocabulario;
