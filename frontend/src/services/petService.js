import api from "./config";


const createPet = async (body) => {
    try {
        const {data} = await api.post('/pet/', body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPets = async () => {
    try {
        const {data} = await api.get('/pet/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPetsByShelter = async (shelterId) =>{
    try {
        const {data} = await api.get(`/pet/shelter/${shelterId}`)
    return data
    } catch (error) {
        console.log(error.response.data)
    }  
}

const getOnePet = async (id) => {
    try {
        const {data} = await api.get(`/pet/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updatePet = async (id, body) => {
    try {
        const {data} = await api.put(`/pet/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOnePet = async (id) => {
    try {
        const {data} = await api.delete(`/pet/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}


const createPetWithShelter =  async (body) => {
    try {
        const {data} = await api.post('/pet/createpetwithshelter', body,{
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}



export {createPetWithShelter, createPet, getAllPets, getOnePet, updatePet, deleteOnePet, getAllPetsByShelter }