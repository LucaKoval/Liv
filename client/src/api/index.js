import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3100/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const getUserByUsername = username => api.get(`/user/username/${username}`)

const apis = {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    getUserByUsername
}

export default apis
