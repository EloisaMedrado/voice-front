import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/database";

const save = require('save-file');
const fs = require('fs');

const RecordRTC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const RecordRTC = window.RecordRTC;
    const [recordRTC, setRecordRTC] = useState(null);
    const config = {
        apiKey: "AIzaSyBJVoE32GkbMok8nXQI7vyoFkT89NwKAck",
        authDomain: "voicefront-b7d06.firebaseapp.com",
        databaseURL: "https://voicefront-b7d06-default-rtdb.firebaseio.com/",
        projectId: "voicefront-b7d06",
        storageBucket: "voicefront-b7d06.appspot.com",
        messagingSenderId: "572736577355",
    };
    const uid = '2475807995852646';


    useEffect(() => {
        firebase.initializeApp(config);
        navigator.mediaDevices.getUserMedia({video: false, audio: true})
            .then(audioStream => {
                setRecordRTC(new RecordRTC(audioStream, {
                    type: 'audio',
                    recorderType: window.StereoAudioRecorder,
                    mimeType: 'audio/mp3',
                    sampleRate: 44100,
                    bufferSize: 16384
                }))
            })
            .catch(err => console.log('errrrrr', err));
    }, [])

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'pt-BR'


    const startRecording = () => {
        recordRTC.startRecording();
        startSpeechRecognition();
        setIsRecording(true);
    }

    const startSpeechRecognition = () => {
        // recognition.addEventListener('end', recordRTC.start);
        recognition.start();
        recognition.addEventListener('result', e => {
            const transcrip = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript).join('');
            setTranscript(transcrip);
            // performHighlighting(transcript);
        });
    }

    const stopRecording = () => {
        setIsRecording(false);
        // recognition.removeEventListener('end', recognition.start);
        recognition.stop();
        recordRTC.stopRecording(function (audioURL) {
            const recordedBlob = this.getBlob();
            console.log('recordedBlob', recordedBlob);
            recordRTC.getDataURL(function (dataURL) {
                console.log('dataURl', dataURL);
                save(dataURL, `./temp/${uid}.mp3`)
                firebase.database().ref('users/' + uid).child('mp3').set(dataURL);
            });
            console.log('audio url', audioURL);
        });
    }

    return (
        <>
            <div style={{margin: 15}}>
                <div className="description">
                    <div className="description-content">
                        <h3>Olá, seja bem vindo!</h3>
                        Muitas pessoas enfrentam uma enorme ansiedade social devido à gagueira e outros impedimentos de
                        fala. Este aplicativo tem como objetivo minimizar esse risco, aprendendo quais palavras você tem
                        dificuldade em pronunciar e, em seguida, ajudando você a gerar discursos. <br/>
                        Vamos ler o parágrafo à direita. Quando estiver pronto, pressione o botão do microfone!
                    </div>
                    {!isRecording && (<Button className="button" onClick={startRecording}>
                        Começar gravação
                    </Button>)
                    }
                    <Button className="button" onClick={stopRecording}>
                        Parar gravação
                    </Button>
                    <div>
                        textoo: {transcript}
                    </div>
                </div>

            </div>

        </>


    )
};

export default RecordRTC;
