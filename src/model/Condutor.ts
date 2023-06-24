import { AbstractEntity } from "./Abstract.entity"

export class Condutor extends AbstractEntity{
    nome! : string
    cpf! : string
    telefone! : string
    tempoPago! : number
    tempoDesconto! : Date
}