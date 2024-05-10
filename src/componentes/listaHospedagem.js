/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalEdicaoHospedagem from "./modalEdicaoHospedagem";


export default function ListaHospedagem({ tema }) {
    const [modalState, setModalState] = useState({
        show: false,
        hospedagemSelecionada: null,
        modalType: ""
    });

    function handleShow(hospedagem, modalType) {
        setModalState({
            show: true,
            hospedagemSelecionada: hospedagem,
            modalType: modalType
        });
    }

    function handleClose() {
        setModalState({
            show: false,
            hospedagemSelecionada: null,
            modalType: ""
        });
    }

    let cliente1 = {
        id: 1,
        nome: "Felipe Vieira",
        nomeSocial: "Felipe Vieira",
        dataNascimento: "19/08/1975",
        dataCadastro: "19/08/1975",
        documentos: [
            {
                numero: "456",
                dataExpedicao: "19/08/1975",
                tipoDocumento: "Cadastro de Pessoas Física"
            }
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
        id: 2,
        nome: "Dependente Teste",
        nomeSocial: "Dependente Teste",
        dataNascimento: "19/08/1975",
        dataCadastro: "19/08/1975",
        documentos: [
            {
                numero: "123",
                dataExpedicao: "19/08/1975",
                tipoDocumento: "Cadastro de Pessoas Física"
            },
            {
                numero: "321",
                dataExpedicao: "19/08/1975",
                tipoDocumento: "Passaporte"
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

    let hospedagem1 = {
        dataInicio: "09/05/2024",
        dataFinal: "14/05/2024",
        acomodacao: "Solteiro Simples",
        clientes: [cliente1]
    }

    let hospedagem2 = {
        dataInicio: "19/06/2024",
        dataFinal: "24/06/2024",
        acomodacao: "Família Simples",
        clientes: [cliente1, cliente2]
    }

    let hospedagem3 = {
        dataInicio: "17/02/2025",
        dataFinal: "28/02/2025",
        acomodacao: "Casal Simples",
        clientes: [cliente1, cliente2]
    }

    const hospedagens = [hospedagem1, hospedagem2, hospedagem3]

    return (
        <div className="container-fluid">
            <div>
                {modalState.show && modalState.modalType === "Edição" && (
                    <ModalEdicaoHospedagem show={modalState.show} handleClose={handleClose} tema={tema} hospedagem={modalState.hospedagemSelecionada} />
                )}
                <h3 className="titulo">Hospedagens</h3>
                <div className="list-group">
                    {hospedagens.map((hospedagem, index) => (
                        <>
                            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <a
                                    href="#"
                                    className="list-group-item-action custom-link"
                                    onClick={() => handleShow(hospedagem, "Informações")}
                                >
                                    <p> <strong> {hospedagem.acomodacao} </strong> {hospedagem.dataInicio} - {hospedagem.dataFinal} </p>
                                    <strong> Clientes: </strong>
                                    {hospedagem.clientes.map(cliente => (
                                        <>
                                            {" " + cliente.nome}
                                        </>
                                    ))}
                                </a>
                                <button
                                    onClick={() => handleShow(hospedagem, 'Edição')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando hospedagem")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}