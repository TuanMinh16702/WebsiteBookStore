import axios from "axios"

export const createProduct = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_add`, data)
    return res.data
}
export const getAllProduct = async() =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product_get`)
    return res.data
}
export const getDetailsProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product_get/${id}`)
    return res.data
}
export const deleteProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_del`, data)
    return res.data
}