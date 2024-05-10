import Principal from "../processos/principal";
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem"
import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

let armazem = Armazem.InstanciaUnica
let clienteTeste = new Cliente("Felipe Vieira", "Felipe", new Date(2005, 9, 27))

let telefone = new Telefone("12", "40028922")
clienteTeste.setTelefones([telefone])

let documento = new Documento("456", TipoDocumento.Passaporte, new Date())
clienteTeste.setDocumentos([documento])

let endereco = new Endereco("lalala","pipipipopopo","tchetchereretchetche","bdjadkcbwijv","bvuwinwnuv","13142351")
clienteTeste.setEndereco(endereco)

let dependenteTeste = new Cliente("Dependente Teste", "Dependente", new Date())
dependenteTeste.setTitular(clienteTeste)
clienteTeste.addDependente(dependenteTeste)

telefone = new Telefone("12", "4002-8922")
dependenteTeste.setTelefones([telefone])

documento = new Documento("123", TipoDocumento.Passaporte, new Date())
dependenteTeste.setDocumentos([documento])

endereco = new Endereco("lalala","pipipipopopo","tchereretchetche","bdjadkcbwijv","bvuwinwnuv","13142352")
dependenteTeste.setEndereco(endereco)

armazem.Clientes.push(clienteTeste)
armazem.Clientes.push(dependenteTeste)
while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}