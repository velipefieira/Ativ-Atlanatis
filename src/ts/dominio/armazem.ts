import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private hospedagens: Hospedagem[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get Hospedagens(){
        return this.hospedagens
    }

    public setClientes(clientes: Cliente[]) {
        this.clientes = clientes
    }

    public setAcomodacoes(acomodacoes: Acomodacao[]) {
        this.acomodacoes = acomodacoes
    }

    public setHospedagens(hospedagens: Hospedagem[]) {
        this.hospedagens = hospedagens
    }
}