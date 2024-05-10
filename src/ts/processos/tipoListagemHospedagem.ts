import Processo from "../abstracoes/processo";
import MenuTipoListagemHospedagem from "../menus/menuTipoListagemHospedagem";
import ListagemHospedagens from "./listagem/listagemHospedagens";
import ListagemHospedagensCliente from "./listagem/listagemHospedagensCliente";

export default class TipoListagemHospedagem extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemHospedagem()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemHospedagens()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemHospedagensCliente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}