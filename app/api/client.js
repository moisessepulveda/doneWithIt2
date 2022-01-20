import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'http://192.168.18.179:9500/api'
})

export default apiClient;
