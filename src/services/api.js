import { http } from './config'

export default {
    getShoes: async () => {
        const response = await http.get('/shoes')
        return response?.data
    },
    getShoesById: async (id) => {
        const response = await http.get(`/shoes/${id}`)
        return response
    },
    putShoes: async (request) => {
        const response = await http.put(`/shoes/${request.id}`, request)
        return response?.data
    }
}

