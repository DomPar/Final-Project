import api from "./config";


const createShelter = async (body) => {
    try {
        const {data} = await api.post('/shelter/', body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllShelter = async () => {
    try {
        const {data} = await api.get('/shelter/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getOneShelter = async (id) => {
    try {
        const {data} = await api.get(`/shelter/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const getOwnShelter = async (id) => {
    try {
        const {data} = await api.get(`/shelter/ownshelter/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updateShelter = async (id, body) => {
    try {
        const {data} = await api.put(`/shelter/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateShelterDescription = async (body) => {
    try {
        const {data} = await api.patch(`/shelter/shelterdescription`, body, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateShelterAvatar = async (body) => {
    try {
        const {data} = await api.patch(`/shelter/shelteravatar`, body, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOneShelter = async (id) => {
    try {
        const {data} = await api.delete(`/shelter/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}



export { createShelter, getAllShelter, getOneShelter, updateShelter, deleteOneShelter, getOwnShelter, updateShelterDescription, updateShelterAvatar }