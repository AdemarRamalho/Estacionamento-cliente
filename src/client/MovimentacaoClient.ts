import { Movimentacao } from "@/model/Movimentacao";
import axios, { AxiosInstance } from "axios";

export class MovimentacaoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
	public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
	public async finalizarMov(id: number): Promise<any> {
        try {
            return (await this.axiosClient.put<any>(`/finalizar/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }


	public async cadastrar(Movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.post('/', Movimentacao))
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

	public async editar(Movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${Movimentacao.id}`, Movimentacao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}
export default new MovimentacaoClient();