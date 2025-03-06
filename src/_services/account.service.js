/* Import des modules nécessaires */
import Axios from './caller.service';

let login = (credentials) => {
    return Axios.post('/authentification/Login', credentials)
}

let logout = () => {
    localStorage.removeItem('token');
}

let saveToken = (access_token) => {
    localStorage.setItem('token', access_token);
}

let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token;
}

export const accountService = {
    login,
    logout,
    saveToken,
    isLogged,
}