export const getToken = () => {
    let ls = JSON.parse(localStorage.getItem('alkybank'))

    return ls.token
}