import React, {useState} from 'react';

import './General.css';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, FormControl, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

import background from "./img/home2.png";

function Predicao() {

    const [showRecordButton, setShowRecordButton] = useState(true);
    const {transcript, listening, resetTranscript} = useSpeechRecognition();
    const startRecording = () => {
        resetTranscript();
        setShowRecordButton(!showRecordButton);
        SpeechRecognition.startListening({language: 'pt-br'})
    };

    const recognition = SpeechRecognition.getRecognition();
    recognition.onend = (e) => {
        console.log('on end', e);
        setShowRecordButton(true);
    }

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
                <div className="description">
                    <div className="description-content">
                        <p>Quando estiver pronto, pressione o botão do microfone!</p>
                    
                        {showRecordButton && (<Button className="button" onClick={startRecording}>
                            Começar gravação
                        </Button>)
                        }
                    </div>
                    
                    <div style={{marginTop: 15}}>
                        Texto: {transcript}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Predicao;
