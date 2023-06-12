import axios, {AxiosInstance} from "axios";
import { Veiculo } from "@/model/veiculo";

export class CondutorClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    public async buscaPorId(id : number): Promise<Veiculo> {
        try{
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }
}