import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemDependentesDoTitular from "./listagem/listagemDependentesDoTitular";
import ListagemTitularDoDependente from "./listagem/listagemTitularDoDependente";
import ListagemTitulares from "./listagem/listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentesDoTitular()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemTitularDoDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}