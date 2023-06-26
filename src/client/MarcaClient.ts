import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

export class MarcaClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
	public async listaAll(): Promise<any> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
	public async listaAllAtivos(): Promise<any> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista/ativos`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(Marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.post('/', Marca))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(Marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${Marca.id}`, Marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(Marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${Marca.id}`, Marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async ativar(Marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/ativar/${Marca.id}`, Marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
	public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

}
export default new MarcaClient();