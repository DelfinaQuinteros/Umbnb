import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://localhost:8080';

const umbnbApi = axios.create({
    baseURL
})

umbnbApi.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem('token')

    if (token) {
        config.headers['Authorization'] = token
    }

    return config;

})

export default umbnbApi;