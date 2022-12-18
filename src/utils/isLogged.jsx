import { useSelector } from "react-redux";

export function isLogged(){
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth)

    if(!token || !user) return undefined;
    return token
}

export function isLoggedAdmin(){
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth)

    if(!token || !user) return undefined
    return user.roleId === 1
}
