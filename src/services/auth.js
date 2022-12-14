import localStorage from "../utils/localStorage";
import { postRequest } from "./http-request";

const login = async (email, password) => {
    try {
        const response = await postRequest('/auth/login', { email, password })

        localStorage.write('alkybank', response.body)
        
        return response

    } catch (error) {
        throw new Error(error)
    }
}

const logout = () => localStorage.remove('alkybank')

const auth = { login, logout }

export default auth