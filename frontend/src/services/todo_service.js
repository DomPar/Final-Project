import api from "./index_service";

const getAllTodos = async () => {

    const {data} = await api.get('/todos')

    return data
}

const getTodoById = async (id) => {
    
    const {data} = await api.get(`todos/${id}`)
    return data;
}

export {getAllTodos, getTodoById}