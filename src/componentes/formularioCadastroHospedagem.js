import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import "./styles/form.css";

export default function CadastroHospedagem() {
    // Estado inicial da hospedagem
    const [hospedagem, setHospedagem] = useState({
        dataInicio: "",
        dataFinal: "",
        acomodacao: "",
        clientes: [{ documentos: "" }] // Inicializa com um cliente vazio
    });

    // Função para lidar com mudanças nas datas e acomodação
    const handleChange = (e, field) => {
        const { value } = e.target;
        setHospedagem({ ...hospedagem, [field]: value });
    };

    // Função para adicionar um cliente à lista de clientes
    const addClienteField = () => {
        const newCliente = { documentos: "" };
        setHospedagem((prevHospedagem) => ({
            ...prevHospedagem,
            clientes: [...prevHospedagem.clientes, newCliente]
        }));
    };

    // Função para lidar com a edição de documentos do cliente
    const handleDocumentoChange = (e, index) => {
        const updatedClientes = [...hospedagem.clientes];
        updatedClientes[index].documentos = e.target.value;
        setHospedagem({ ...hospedagem, clientes: updatedClientes });
    };

    // Função para remover um cliente da lista
    const removeCliente = (index) => {
        const updatedClientes = [...hospedagem.clientes];
        updatedClientes.splice(index, 1);
        setHospedagem({ ...hospedagem, clientes: updatedClientes });
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hospedagem gerada:", hospedagem);
    };

    return (
        <div className="container">
            <h2>Cadastro de Hospedagem</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Data de Início</label>
                    <input
                        type="date"
                        className="form-control"
                        value={hospedagem.dataInicio}
                        onChange={(e) => handleChange(e, "dataInicio")}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data Final</label>
                    <input
                        type="date"
                        className="form-control"
                        value={hospedagem.dataFinal}
                        onChange={(e) => handleChange(e, "dataFinal")}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Tipo de Acomodação</label>
                    <select
                        className="form-select"
                        value={hospedagem.acomodacao}
                        onChange={(e) => handleChange(e, "acomodacao")}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Solteiro Simples">Solteiro Simples</option>
                        <option value="Solteiro Mais">Solteiro Mais</option>
                        <option value="Casal Simples">Casal Simples</option>
                        <option value="Família Simples">Família Simples</option>
                        <option value="Família Mais">Família Mais</option>
                        <option value="Família Super">Família Super</option>
                    </select>
                </div>

                {/* Campos de Cliente */}
                {hospedagem.clientes.map((cliente, index) => (
                    <div key={index} className="mb-3">
                        <hr />
                        <label className="form-label">Documento do Cliente</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cliente.documentos}
                            onChange={(e) => handleDocumentoChange(e, index)}
                        />
                        {/* Botão para remover cliente */}
                        {index > 0 && (
                            <button
                                type="button"
                                className="btn btn-outline-danger mt-2"
                                onClick={() => removeCliente(index)}
                            >
                                <FaRegTrashCan />
                            </button>
                        )}
                    </div>
                ))}
                <Button
                    type="button"
                    variant="btn btn-outline-secondary"
                    onClick={addClienteField}
                >
                    Adicionar Cliente
                </Button>

                <hr />
                <div className="botaoEnviar" style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="btn btn-outline-secondary" type="submit">
                        Confirmar
                    </Button>
                </div>
            </form>
        </div>
    );
}
