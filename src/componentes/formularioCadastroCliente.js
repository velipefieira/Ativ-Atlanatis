import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import "./styles/form.css"

export default function CadastroCliente() {
    const [cliente, setCliente] = useState({
        nome: "",
        nomeSocial: "",
        dataNascimento: "",
        documentos: [{ numero: "", dataExpedicao: "", tipoDocumento: "" }],
        telefones: [{ ddd: "", numero: "" }],
        endereco: {
            rua: "",
            bairro: "",
            cidade: "",
            estado: "",
            pais: "",
            codigoPostal: ""
        },
        dependentes: [{ documentos: [{ numero: "", dataExpedicao: "", tipoDocumento: "" }] }]
    });

    const handleChange = (e, field, index, subField) => {
        const { value } = e.target;
        if (index !== undefined) {
            if (subField) {
                const updatedArray = [...cliente[field]];
                updatedArray[index][subField] = value;
                setCliente({ ...cliente, [field]: updatedArray });
            } else {
                const updatedArray = [...cliente[field]];
                updatedArray[index] = { ...updatedArray[index], ...value };
                setCliente({ ...cliente, [field]: updatedArray });
            }
        } else {
            setCliente({ ...cliente, [field]: value });
        }
    };

    const addField = (field) => {
        setCliente({ ...cliente, [field]: [...cliente[field], {}] });
    };

    const removeField = (field, index) => {
        const updatedArray = [...cliente[field]];
        updatedArray.splice(index, 1);
        setCliente({ ...cliente, [field]: updatedArray });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cliente cadastrado:", cliente);
    };

    return (
        <div className="container">
            <h2 className="form-titulo">Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit}>
                {/* Campo de Nome */}
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.nome}
                        onChange={(e) => handleChange(e, "nome")}
                        required
                    />
                </div>

                {/* Campo de Nome Social */}
                <div className="mb-3">
                    <label className="form-label">Nome Social</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.nomeSocial}
                        onChange={(e) => handleChange(e, "nomeSocial")}
                    />
                </div>

                {/* Campo de Data de Nascimento */}
                <div className="mb-3">
                    <label className="form-label">Data de Nascimento</label>
                    <input
                        type="date"
                        className="form-control"
                        value={cliente.dataNascimento}
                        onChange={(e) => handleChange(e, "dataNascimento")}
                        required
                    />
                </div>

                <hr/>

                <h4>Documentos: </h4>
                {/* Campos de Documentos */}
                {cliente.documentos.map((documento, index) => (
                    <div key={index} className="mb-3">
                        <hr />
                        <label className="form-label">Número do Documento</label>
                        <input
                            type="number"
                            className="form-control"
                            value={documento.numero}
                            onChange={(e) => handleChange(e, "documentos", index, "numero")}
                            required
                        />
                        <label className="form-label">Tipo de Documento</label>
                        <select
                            className="form-select"
                            value={documento.tipoDocumento}
                            onChange={(e) => handleChange(e, "documentos", index, "tipoDocumento")}
                        >
                            <option value="">Selecione o Tipo de Documento</option>
                            <option value="Cadastro de Pessoas Física">CPF</option>
                            <option value="Registro Geral">RG</option>
                            <option value="Passaporte">Passaporte</option>
                        </select>
                        <label className="form-label">Data de Expedição</label>
                        <input
                            type="date"
                            className="form-control"
                            value={documento.dataExpedicao}
                            onChange={(e) => handleChange(e, "documentos", index, "dataExpedicao")}
                            required
                        />
                        {index > 0 ? (
                            <>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger mt-2"
                                    onClick={() => removeField("documentos", index)}
                                >
                                    <FaRegTrashCan />
                                </button>
                            </>

                        ) : (
                            <></>
                        )}
                    </div>
                ))}
                <Button
                    type="button"
                    variant="btn btn-outline-secondary"
                    onClick={() => addField("documentos")}
                >
                    Adicionar Documento
                </Button>

                <hr/>

                <h4>Telefones:</h4>
                {/* Campos de Telefones */}
                {cliente.telefones.map((telefone, index) => (
                    <div key={index} className="mb-3">
                        <hr/>
                        <label className="form-label">DDD</label>
                        <input
                            type="number"
                            className="form-control"
                            value={telefone.ddd}
                            onChange={(e) => handleChange(e, "telefones", index, "ddd")}
                            required
                        />
                        <label className="form-label">Número de Telefone</label>
                        <input
                            type="number"
                            className="form-control"
                            value={telefone.numero}
                            onChange={(e) => handleChange(e, "telefones", index, "numero")}
                            required
                        />
                        {index > 0 ? (
                            <button
                                type="button"
                                className="btn btn-outline-danger mt-2"
                                onClick={() => removeField("telefones", index)}
                            >
                                <FaRegTrashCan />
                            </button>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}
                <Button
                    type="button"
                    variant="btn btn-outline-secondary"
                    onClick={() => addField("telefones")}
                >
                    Adicionar Telefone
                </Button>

                <hr />


                <h4>Endereço:</h4>
                {/* Campos de Endereço */}
                <div className="mb-3">
                    <hr/>
                    <label className="form-label">Rua</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.rua}
                        onChange={(e) => handleChange(e, "endereco", undefined, "rua")}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Bairro</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.bairro}
                        onChange={(e) => handleChange(e, "endereco", undefined, "bairro")}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cidade</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.cidade}
                        onChange={(e) => handleChange(e, "endereco", undefined, "cidade")}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.estado}
                        onChange={(e) => handleChange(e, "endereco", undefined, "estado")}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">País</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.pais}
                        onChange={(e) => handleChange(e, "endereco", undefined, "pais")}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Código Postal</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cliente.endereco.codigoPostal}
                        onChange={(e) => handleChange(e, "endereco", undefined, "codigoPostal")}
                        required
                    />
                </div>

                <hr />

                <h4> O Cliente é dependente?</h4>
                {/* Checkbox para indicar se o cliente é dependente */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="dependenteCheck"
                        checked={cliente.dependente}
                        onChange={(e) => setCliente({ ...cliente, dependente: e.target.checked })}
                    />
                    <label className="form-check-label" htmlFor="dependenteCheck">
                        Sim
                    </label>
                </div>

                {/* Campo para inserir documento do titular se o cliente for dependente */}
                {cliente.dependente && (
                    <div className="mb-3">
                        <label className="form-label">Documento do Titular</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cliente.titularDocumento}
                            onChange={(e) => handleChange(e, "titularDocumento")}
                            required={cliente.dependente}
                        />
                    </div>
                )}

                <hr />
                <br />

                <div className="botaoEnviar" style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="btn btn-outline-secondary" onClick="submit">
                        Confirmar
                    </Button>
                </div>
            </form>
            <br />
        </div >
    );
}
