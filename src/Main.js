import React, {useState} from 'react';

import './General.css';
import Api from './Api';
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, Tab, Tabs, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import background from "./img/home2.png";

function Main() {
    
    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);
    const [fileKey, setFileKey] = useState(Date.now());

    function enviarTexto() {
        var json = {
            "texto": document.getElementById('texto').value
        };

        Api.post('api/metodo-post', JSON.stringify(json))
            .then(function (response) {
                var json = JSON.parse(response.data)
                setData(json);
            })
            .catch(function (error) {
                console.log("Erro", error);
            });
    };

    const onFormSubmitFile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        Api.post('api/upload-file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                toast.success("Arquivo importado com sucesso");
                // implementar no back para salvar o conteudo do arquivo e depois retornar
                // igual o método enviarTexto ?
                var json = JSON.parse(response.data);
                setData(json);
            })
            .catch(function (error) {
                toast.error("Erro ao importar arquivo");
                console.log("Erro no file upload", error);
            })
            .finally(function () {
                setFileKey(Date.now());
            });
    }

    const onFormSubmitLinks = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(e);

        Api.post('api/send-links', new FormData(e.target))
            .then(function (response) {
                toast.success("Links enviados com sucesso");
                console.log(response);

                //var json = JSON.parse(response.data);
                //setData(json);
            })
            .catch(function (error) {
                toast.error("Erro ao enviar os links");
                console.log("Erro ao enviar os links", error);
            })
            .finally(function () {

            });

    };

    const onChange = (e) => {
        setFile(e.target.files[0]);
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

            <div className="conteudo">
                <div className="esquerda">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Texto">
                            <h4>Digite um texto para coleta de vocabulário:</h4>
                            <textarea id="texto" name="texto" rows="15" cols="45"></textarea>
                            <p><Button variant="primary" onClick={enviarTexto}>Enviar</Button></p>
                        </Tab>
                        <Tab eventKey="profile" title="Arquivo">
                            <form onSubmit={onFormSubmitFile}>
                                <h4>Envie um arquivo para coleta de vocabulário</h4>
                                <input type="file" onChange={onChange} key={fileKey}/>
                                <p><Button type="submit" variant="primary">Upload</Button></p>
                                <ToastContainer/>
                            </form>
                        </Tab>
                        <Tab eventKey="contact" title="Links">
                            <h4>Envie links de redes sociais para coleta de vocabulário:</h4>
                            <Form onSubmit={onFormSubmitLinks}>
                                <Form.Group controlId="urlFacebook">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control name="urlFacebook" type="text"
                                                placeholder="Digite a url do seu Facebook"/>
                                </Form.Group>

                                <Form.Group controlId="userTwitter">
                                    <Form.Label>Twitter</Form.Label>
                                    <Form.Control name="userTwitter" type="text"
                                                placeholder="Digite seu nome de usuário do Twitter"/>
                                </Form.Group>

                                <Form.Group controlId="urlLinkedIn">
                                    <Form.Label>LinkedIn</Form.Label>
                                    <Form.Control name="urlLinkedIn" type="text"
                                                placeholder="Digite a url do seu LinkedIn"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </Tab>

                    </Tabs>
                </div>

                <div className="direita">
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
        </div>
    );
}

export default Main;
