import { Configuracao } from "@/model/Configuracao";
import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(Configuracao: Configuracao): Promise<void> {
		try {
			return (await this.axiosClient.post('/', Configuracao))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(Configuracao: Configuracao): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${Configuracao.id}`, Configuracao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

}