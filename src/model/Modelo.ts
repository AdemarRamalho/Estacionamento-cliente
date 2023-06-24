import { AbstractEntity } from "./Abstract.entity"
import { Marca } from "./Marca"

export class Modelo extends AbstractEntity{ 

    nome! : string
    marca! : Marca
}