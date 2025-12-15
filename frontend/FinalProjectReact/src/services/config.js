import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'https://final-project-dom.onrender.com/api'
})

export default api