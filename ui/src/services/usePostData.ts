import { api } from "./api"

export const usePostData = async (collectionName: string, data: {}) => {
    const token = localStorage.getItem("authToken");
    await api.post(`/${collectionName}`, data, { headers: { "x-access-token": token }});
}