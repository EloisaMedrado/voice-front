import React, {useState} from "react";
import {Button} from "react-bootstrap";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
// import {} from SpeechSynthesis;
const VoiceRecorder = () => {

    const [showRecordButton, setShowRecordButton] = useState(true);
    const {transcript, listening, resetTranscript} = useSpeechRecognition()
    const startRecording = () => {
        resetTranscript();
        setShowRecordButton(false);
        SpeechRecognition.startListening({language: 'pt-br'})
    };

    const recognition = SpeechRecognition.getRecognition();
    console.log('recognition', recognition);
    recognition.onend = (e) => {
        console.log('on end', e);
        setShowRecordButton(true);
    }

    console.log('transcript', transcript);
    console.log('listening', listening);

    return (
        <div style={{margin: 15}}>
            <div className="description">
                <div className="description-content">
                    <h3>Olá, seja bem vindo!</h3>
                    Muitas pessoas enfrentam uma enorme ansiedade social devido à gagueira e outros impedimentos de
                    fala. Este aplicativo tem como objetivo minimizar esse risco, aprendendo quais palavras você tem
                    dificuldade em pronunciar e, em seguida, ajudando você a gerar discursos. <br/>
                    Vamos ler o parágrafo à direita. Quando estiver pronto, pressione o botão do microfone!
                </div>
                {showRecordButton && (<Button className="button" onClick={startRecording}>
                    Começar gravação
                </Button>)
                }
                <div>
                    textoo: {transcript}
                </div>
            </div>
        </div>

    )
};

export default VoiceRecorder;
