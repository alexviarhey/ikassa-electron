import axios from 'axios'

let instance = axios.create({
    baseUrl: '',
    withCredentials: true,
    headers: {

    }
});



export const authApi = {
    authorize (authData) {

        return instance.post('/authorize', authData)
    },

    changePin (changePinData) {
        return instance.post('/pin/change', changePinData)
    }
};