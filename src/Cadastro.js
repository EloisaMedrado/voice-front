import React, {useState} from 'react';

import './General.css';
import Api from './Api';
import {toast, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import background from "./img/home2.png";

function Cadastro() {
    
    const onFormSubmitCadastro = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(e);

        Api.post('api/cadastro', new FormData(e.target))
            .then(function (response) {
                toast.success("Cadastro efetuado com sucesso");
                console.log(response);

                //var json = JSON.parse(response.data);
                //setData(json);
            })
            .catch(function (error) {
                toast.error("Erro ao salvar os dados");
                console.log("Erro ao salvar os dados", error);
            })
            .finally(function () {

            });

    };

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

            <div className="conteudo cadastro">
                <Form onSubmit={onFormSubmitCadastro}>
                    <Form.Group controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" type="text" placeholder="Digite seu nome"/>
                    </Form.Group>

                    <Form.Group controlId="dataNasc">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control name="dataNasc" type="text" placeholder="Digite sua data de nascimento"/>
                    </Form.Group>

                    <Form.Group controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control name="telefone" type="text" placeholder="Digite seu telefone"/>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="text" placeholder="Digite seu email"/>
                    </Form.Group>

                    <Form.Group controlId="senha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="text" placeholder="Digite sua senha"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Cadastro;
