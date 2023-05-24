import axios from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000" })
const config = {
    headers: {
        "Content-Type": "application/json",
    }
}

export const GetNotesAPI = () => API.get('/notes', config)
export const addNoteAPI = (title, text) => API.post('/notes', { title, text }, config)
export const deleteNoteAPI = (id) => API.delete('/note?id='+id,config)