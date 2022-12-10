import { api } from "./api"

export const useFetchData = async (collectionName: string) => {
    const token = localStorage.getItem("authToken");
    const result = await api.get(`/${collectionName}`, { headers: { "x-access-token": token }});
    return result;
}