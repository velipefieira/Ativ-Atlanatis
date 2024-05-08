/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

import "./styles/listaGeral.css";

export default function ModalEdicaoCliente(props) {
    const [telefoneList, setTelefoneList] = useState([{ telefone: '' }]);
    const [documentoList, setDocumentoList] = useState([{ documento: '' }]);

    const cor = "#001e3b;"

    const handleDataEmissaoChange = (e, index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList[index].dataEmissao = e.target.value;
        setDocumentoList(updatedDocumentoList);
    };

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { telefone: '' }]);
    };

    const handleTelefoneChange = (e, index) => {
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList[index].telefone = e.target.value;
        setTelefoneList(updatedTelefoneList);
    };

    const addDocumentoField = () => {
        setDocumentoList([...documentoList, { Documento: '' }]);
    };

    const handleDocumentoChange = (e, index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList[index].Documento = e.target.value;
        setDocumentoList(updatedDocumentoList);
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className="form-titulo">Nome:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Nome Social:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Data Nascimento:</label>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data Nascimento" aria-label="Data Nascimento" aria-describedby="basic-addon1" />
                    </div>

                    <p> Endereço: </p>

                    <label className="form-titulo">Rua:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o rua" aria-label="rua" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Bairro:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o bairro" aria-label="bairro" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Cidade:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite a cidade" aria-label="cidade" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Estado:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o estado" aria-label="estado" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">País:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o país" aria-label="país" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Código Postal:</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Digite o CEP" aria-label="cep" aria-describedby="basic-addon1" />
                    </div>

                    <label className="form-titulo">Documento:</label>
                    {documentoList.map((documento, index) => (
                        <>
                            <div key={index} className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Digite o numero"
                                    value={documento.numero}
                                    onChange={(e) => handleDocumentoChange(e, index)}
                                />
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Tipo de documento</option>
                                    <option value="CPF">CPF</option>
                                    <option value="RG">RG</option>
                                    <option value="Passaporte">Passaporte</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Data de Expedição"
                                    value={documento.dataExpedicao}
                                    onChange={(e) => handleDataEmissaoChange(e, index)}
                                />
                            </div>
                            {/* <label for="documento" className="form-titulo">Tipo do documento:</label>
                                <div className="input-group mb-3">
                                    <select name="documento" id="documento" className="form-control">
                                        <option value="CPF"> CPF </option>
                                        <option value="Passaporte"> Passaporte</option>
                                        <option value="RG"> RG</option>
                                    </select>
                                </div> */}
                            <hr />
                        </>
                    ))}

                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: props.tema, marginBottom: 10, textDecoration: cor }}
                        onClick={addDocumentoField}
                    >
                        Adicionar Documento
                    </button>

                    <br />

                    <label className="form-titulo">Telefone:</label>
                    {telefoneList.map((telefone, index) => (
                        <div key={index} className="input-group mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Digite o ddd"
                                value={telefone.ddd}
                                onChange={(e) => handleTelefoneChange(e, index)}
                            />
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Digite o telefone"
                                value={telefone.telefone}
                                onChange={(e) => handleTelefoneChange(e, index)}
                            />
                        </div>
                    ))}

                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: props.tema, marginBottom: 10, textDecoration: cor }}
                        onClick={addTelefoneField}
                    >
                        Adicionar Telefone
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} style={{ background: props.tema, textDecoration: cor}}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}