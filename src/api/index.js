import axios from "axios";
import { getToken } from "../utils/token";

const BASE_URL = import.meta.env.VITE_BACKEND || 'http://localhost:3000'

export class Api {
    constructor(){

    }

    apiPrivate(){
        return axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${getToken()}`,
                // withCredentials: true
            }
        })
    }
}
