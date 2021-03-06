import { API } from '../../config'
import axios from 'axios'

export const signup = (user) => {
    return axios.post(`${API}/signup`, user)
}
export const signin = (user) => {
    return axios.post(`${API}/signin`, user)
}

export const signinWithGoogle = (tokenId) => {
    return axios.post(`${API}/signin/google`, { tokenId })
}
export const signinWithFacebook = (userID, name, email, accessToken) => {
    return axios.post(`${API}/signin/facebook`, { userID, name, email, accessToken })
}

export const signout = (next) => {
    if (typeof window !== 'undefinded') {
        localStorage.removeItem('jwt');
    }
    next();
    return axios.get(`${API}/signout`);
}


export const authenticate = (user, next) => {
    if (typeof window !== 'undefinded') {
        localStorage.setItem('jwt', JSON.stringify(user));
    }
    next();
}

export const isAuthenticate = () => {
    if (typeof window !== 'undefinded') {
        return JSON.parse(localStorage.getItem('jwt'));
    }
}