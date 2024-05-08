/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home ({tema}) {
        return (
            <>
            <div className="container-fluid">
                <h2 className="subtitulo-home">Seja Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo!</h2>
                <hr/>
            </div>
                <div className="recursos">
                    <h3 className="titulo-recursos">Recursos principais da nossa plataforma:</h3>
                    <ul>
                        <li className="lista-recursos">Cadastro de clientes e hospedagens</li>
                        <li className="lista-recursos">Listagens das acomodações do resort  </li>
                        <li className="lista-recursos">Listagens dos clientes e hospedagens</li>
                        <li className="lista-recursos">Recursos para editar e excluir clientes e hospedagens</li>
                        <li className="lista-recursos">Comprar produtos e serviços</li>
                    </ul>
                </div>

                <div className="contatos">
                    <h3 className="titulo-contatos">Contato:</h3>
                    <hp className="lista-contatos">Nos mande um email!</hp>
                    <ul>
                        <li className="lista-contatos">Email: atlantis@gmail.com </li>
                    </ul>
                </div>
            </>
        );
    }
