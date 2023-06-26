import { Veiculo } from "@/model/Veiculo";
import axios, { AxiosInstance } from "axios";

export class VeiculoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async listaAll(): Promise<any[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(Veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', Veiculo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(Veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${Veiculo.id}`, Veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(Veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${Veiculo.id}`, Veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
	

    public async ativar(Veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/ativar/${Veiculo.id}`, Veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

}
export default new VeiculoClient();