import api from "./config";



const getAllUsers = async () => {
    try {
        const {data} = await api.get('/user/', {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getOneUser = async (id) => {
    try {
        const {data} = await api.get(`/user/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
            }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const getOwnUser = async (email) => {
    try {
        const {data} = await api.get(`/user/profile/${email}`,{
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updateUser = async (id, body) => {
    try {
        const {data} = await api.put(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updatePassword = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateEmail = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateUserName = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/username/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const addUserToFavorites = async (petId) => {
    try {
        const {data} = await api.put(`/user/add/${petId}`, {},{
            headers: {
              authorization: localStorage.getItem("token"),
            }
          })
          
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOwnProfile = async (id) => {
    try {
        const {data} = await api.delete(`/user/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const restFromFavorites = async (userId, petId) => {
    try {
        const {data} = await api.put(`/user/add/${userId}`, {userId, petId})
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}


const updateUserDescription = async (body) => {
    try {
        console.log('hola')
        const {data} = await api.patch(`/user/userdescription`, body, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateUserAvatar = async (body) => {
    try {
        console.log(body)
        const {data} = await api.patch(`/user/useravatar`, body, {
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}



export {
    updateUserName, 
    updateUserDescription, 
    restFromFavorites, 
    deleteOwnProfile, 
    addUserToFavorites, 
    getAllUsers, 
    getOneUser, 
    updateUser, 
    updatePassword, 
    getOwnUser, 
    updateEmail,
    updateUserAvatar
}