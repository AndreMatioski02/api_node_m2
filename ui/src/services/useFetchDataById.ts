import { api } from "./api"

export const useFetchDataById = async (collectionName: string, id: string) => {
    const token = localStorage.getItem("authToken");
    const result = await api.get(`/${collectionName}/${id}`, { headers: { "x-access-token": token }});
    return result;
}