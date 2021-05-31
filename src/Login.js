import React, {useState} from 'react';

import './General.css';
import Api from './Api';
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, Tab, Tabs, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import background from "./img/home2_o.png";

function Main() {

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


    return (
        <div>
            <div className="Main" style={{ height: "533px", backgroundImage: `url(${background})` }}>
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

                <div className="conteudo login">
                    <div style={{margin: "15px"}}>
                        <Form style={{paddingBottom: "12px", paddingTop: "12px"}} onSubmit={onFormSubmitLinks}>
                            <Form.Group controlId="urlFacebook">
                                <Form.Label>Login</Form.Label>
                                <Form.Control name="user" type="text" placeholder="Digite seu usuário"/>
                            </Form.Group>

                            <Form.Group controlId="userTwitter">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control name="password" type="text" placeholder="Digite sua senha"/>
                            </Form.Group>

                            <Button style={{marginLeft: "40%"}} variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
