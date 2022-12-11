import { api } from "./api"

export const useDeleteData = async (collectionName: string, docId: string) => {
    const token = localStorage.getItem("authToken");
    await api.delete(`/${collectionName}/${docId}`, { headers: { "x-access-token": token }});
}