import React, {useState} from 'react';

import './General.css';

import 'react-toastify/dist/ReactToastify.css';
import {Button, Form, FormControl, Navbar, Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import background from "./img/home2.png";

function About() {

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

            <div class="conteudo" style={{paddingLeft:'10%', paddingRight: "10%"}}>
                <h2>Projeto USP - Voice</h2>
                <p>A fala pode ser considerada o principal meio de comunicação do ser humano. Portanto,
                  debilitações da fala podem ocasionar problemas de comunicação e, consequentemente,
                  problemas nas relações interpessoais. O desenvolvimento da linguagem está relacionado
                  com a aquisição de quatro componentes linguísticos: aquisição lexical, aquisição 
                  morfossintática, aquisição fonológica e aquisição pragmática. Somente os três primeiros
                  componentes linguísticos serão tratados no presente trabalho. O objetivo do trabalho 
                  proposto é construir mecanismos para a definição de grafos de conhecimento pessoais centrados
                  em diálogos conversacionais. Esses grafos serão utilizados por aplicativos personalizados
                  que terão por objetivo auxiliar pessoas com problemas de fala a completar seus diálogos.
                  Os grafos construídos representarão as informações de pessoas com deficiência de fala, de
                  modo a permitir a busca por informação correlata para a definição de relacionamentos
                  entre o som emitido e o som pretendido na produção da fala. Os Grafos de Conhecimento,
                  ou Knowledge Graph, fornecem uma representação poderosa do conhecimento, porém a
                  construção automática desses grafos, a partir da linguagem falada possui inúmeros desafios.</p>
                  
                  <p>Palavras-chave: construção de grafo de conhecimento, grafo de conhecimento pessoal,
                  pesquisa de similaridade, predição de palavras, processamento de linguagem natural,
                  reconhecimento de fala.</p>
                <h5>Contatos</h5>
                <p>Eloisa: eloisamedrado@usp.br</p>
                <p>Alessandra: ale.alaniz@usp.br</p>
            </div>

            <p></p>
        </div>
    );
}

export default About;
