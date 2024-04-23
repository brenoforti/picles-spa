import { IPet } from "../../interfaces/pet"
import httpClient from "../api/httpClient"

export async function getPetsById(id: string): Promise<IPet> {
    try {
        const response = await httpClient.get(`/pet/${id}`)
        return response.data
    } catch (error){
        console.error('Erro ao Buscar Pet por ID', error)
        throw error
    }
}