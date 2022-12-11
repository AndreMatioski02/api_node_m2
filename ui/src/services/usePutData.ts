import { api } from "./api"

export const usePutData = async (collectionName: string, data: {}, id: string) => {
    const token = localStorage.getItem("authToken");
    await api.put(`/${collectionName}/${id}`, data, { headers: { "x-access-token": token }});
}