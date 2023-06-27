
import { Marca } from "@/model/Marca";
import { Modelo } from "@/model/Modelo";
import axios, { AxiosInstance } from "axios";

class MarcaClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelos',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<any[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, modelo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async editar(id: number, modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, modelo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/desativar/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}

export default new MarcaClient();