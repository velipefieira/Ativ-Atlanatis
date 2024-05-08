import React, { Component, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import { ModalTitle } from "react-bootstrap";

export default class ModalInformacoesCliente extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const clienteSelecionado = this.props.cliente

        if (clienteSelecionado) {

            return (
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <ModalTitle> Descrição do Cliente </ModalTitle>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.show && (
                            <>
                                <p><strong>Nome:</strong> {clienteSelecionado.nome}</p> <hr />
                                <p><strong>Nome social:</strong> {clienteSelecionado.nomeSocial}</p> <hr />
                                <p><strong>Data Nascimento:</strong> {clienteSelecionado.dataNascimento.toDateString()}</p> <hr />
                                <p><strong>Data Cadastro:</strong> {clienteSelecionado.dataCadastro.toDateString()}</p> <hr />
                                <p><strong>Endereco:</strong> </p>
                                <p> {clienteSelecionado.endereco.rua} - {clienteSelecionado.endereco.codigoPostal} </p>
                                <p> {clienteSelecionado.endereco.bairro} - {clienteSelecionado.endereco.cidade} </p>
                                <p> {clienteSelecionado.endereco.estado} - {clienteSelecionado.endereco.pais} </p> <hr />
                                <p><strong> Documentos: </strong></p> {clienteSelecionado.documentos.map(doc => (
                                    <div key={doc.numero}>
                                        <p> {doc.tipo} </p>
                                        <p>{doc.numero} - Emitido em: {doc.dataExpedicao.toDateString()} </p> <hr />
                                    </div>
                                ))}
                                <p><strong> Telefone: </strong></p> {clienteSelecionado.telefone.map(tel => (
                                    <div key={tel}>
                                        <p> {tel.ddd} - {tel.numero} </p> <hr />
                                    </div>
                                ))}
                                {clienteSelecionado.titular === undefined | clienteSelecionado.titular === null ? (
                                    <br />
                                ) : (
                                    <div>
                                        <p><strong>Titular: </strong></p>
                                        <p><strong>Nome:</strong> {clienteSelecionado.titular.nome}</p>
                                        <p><strong>Nome social:</strong> {clienteSelecionado.titular.nomeSocial}</p> <hr />
                                    </div>
                                )}
                            </>
                        )}
                    </Modal.Body>
                </Modal>
            )
        }
    }
}
