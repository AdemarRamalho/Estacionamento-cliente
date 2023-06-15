import { AbstractEntity } from "./Abstract.entity"
import { Cor } from "./Cor"
import { Modelo } from "./Modelo"
import { TipoVeiculo } from "./Tipo.veiculo"

export class Veiculo extends AbstractEntity{

    placa! : string
    modelo! : Modelo
    cor! : Cor
    tipoVeiculo! : TipoVeiculo
    ano! : number
}