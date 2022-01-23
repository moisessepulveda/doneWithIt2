import * as SecureStore from 'expo-secure-store';
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (e) {
        console.log(e);
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (e) {
        console.log(e);
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.log(e);
    }
}

const getUser = async () => {
    const token = await getToken();
    if(token) return jwtDecode(token);

    return null;
}

export default {
    getToken,
    getUser,
    removeToken,
    storeToken,
}
