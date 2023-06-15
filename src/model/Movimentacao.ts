import { AbstractEntity } from "./Abstract.entity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity {

    veiculo! : Veiculo
    condutor! : Condutor
    entrada! : Date
    saida! : Date
    tempo! : Date
    tempoDesconto! : Date
    tempoMulta! : Date
    valorDesconto! : number
    valorMulta! : number
    valorTotal! : number
    valorHora! : number
    valorHoraMulta! : number
}