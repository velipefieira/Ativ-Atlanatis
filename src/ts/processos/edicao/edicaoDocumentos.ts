import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import ImpressorDocumento from "../../impressores/impressorDocumento";
import ImpressorTelefone from "../../impressores/impressorTelefone";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "../cadastros/cadastroDocumentosCliente";
import CadastroEnderecoTitular from "../cadastros/cadastroEnderecoCliente";

export default class EdicaoDocumentos extends Processo {
    private clientes: Cliente[]
    private clienteEditado: Cliente
    private impressor!: Impressor
    private documentos: Telefone[] = []
    constructor(clienteEditado:Cliente) {
        super()
        this.clienteEditado = clienteEditado
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        this.clienteEditado.Documentos.forEach(documento => {
            this.impressor = new ImpressorDocumento(documento)
            console.log(this.impressor.imprimir());
            let edicao = this.entrada.receberTexto("Deseja editar este documento? (S/N)").toUpperCase()
            if (edicao == "S") {
                let numero = this.entrada.receberTexto('Qual o número do documento?')
                let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
                documento.setNumero(numero)
                documento.setDataExpedicao(dataExpedicao)
            }
        })
    }
}