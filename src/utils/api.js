import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/market-products")
    return resp.data
}

export const postContact = async body => {
    const resp = await axiosInstance.post("/contacts", body)
    return resp.data
}