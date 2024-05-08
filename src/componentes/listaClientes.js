/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, ChangeEvent } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalInformacoesCliente from "./modalInformacoesCliente"


export default function ListaClientes({ tema }) {
    const [modalState, setModalState] = useState({
        show: false,
        clienteSelecionado: null,
    });

    function handleShow(cliente) {
        setModalState({
            show: true,
            clienteSelecionado: cliente,
        });
    }

    function handleClose() {
        setModalState({
            show: false,
            clienteSelecionado: null,
        });
    }

    let cliente1 = {
        nome: "Felipe Vieira",
        nomeSocial: "Felipe Vieira",
        dataNascimento: new Date("August 19, 1975 23:15:30"),
        dataCadastro: new Date("August 19, 1975 23:15:30"),
        documentos: [
            {
                numero: "456",
                dataExpedicao: new Date("August 19, 1975 23:15:30"),
                tipo: "Cadastro de Pessoas Física"
            },
            {
                numero: "654",
                dataExpedicao: new Date("August 19, 1975 23:15:30"),
                tipo: "Passaporte"
            },
        ],
        telefone: [
            {
                ddd: "123",
                numero: "123123"
            }
        ],
        endereco: {
            rua: "Rua dos bobos n° 0",
            bairro: "Bairro de teste",
            cidade: "São José dos Campos",
            estado: "São Paulo",
            pais: "Brasil",
            codigoPostal: "12312321"
        },
        titular: undefined,
        dependentes: []
    }
    let cliente2 = {
        nome: "Dependente Teste",
        nomeSocial: "Dependente Teste",
        dataNascimento: new Date("August 19, 1975 23:15:30"),
        dataCadastro: new Date("August 19, 1975 23:15:30"),
        documentos: [
            {
                numero: "123",
                dataExpedicao: new Date("August 19, 1975 23:15:30"),
                tipo: "Cadastro de Pessoas Física"
            },
            {
                numero: "321",
                dataExpedicao: new Date("August 19, 1975 23:15:30"),
                tipo: "Passaporte"
            },
        ],
        telefone: [
            {
                ddd: "987",
                numero: "987789"
            }
        ],
        endereco: {
            rua: "Rua dos bobos n° 15",
            bairro: "Bairro dos testes",
            cidade: "São José dos Campos",
            estado: "São Paulo",
            pais: "Brasil",
            codigoPostal: "12312321"
        },
        titular: cliente1,
        dependentes: []
    }

    cliente1.dependentes.push(cliente2)

    const clientes = [cliente1, cliente2]

    return (
        <div className="container-fluid">
            <div>
                {modalState.show && (
                    <ModalInformacoesCliente show={modalState.show} handleClose={handleClose} tema={tema} cliente={modalState.clienteSelecionado} />
                )}
                <h3 className="titulo">Clientes</h3>
                <div className="list-group">
                    {clientes.map((cliente, index) => (
                        <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={() => handleShow(cliente)}
                            >
                                {cliente.nome}
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Deletando Cliente")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}