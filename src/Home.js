import React, {useState} from 'react';

import './General.css';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import background from "./img/home2.png";

function Home() {

    return (
        <div>
            <div className="Home" style={{ backgroundImage: `url(${background})` }}>
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

            <div class="conteudo" style={{paddingLeft:'10%'}}>
                <h2>Projeto USP - Voice</h2>
                <p>Projeto de mestrado em computação aplicada desenvolvido pela aluna Eloisa Medrado sob orientação da Professora Doutora Alessandra Macedo.</p>
                <Button style={{borderRadius: "30px"}} href="/about" variant="outline-info">Saiba mais</Button>
            </div>

            <p></p>
        </div>
    );
}

export default Home;
