import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoutes = ({children}) => {
    const {auth} = useSelector((state) => state)
    const role = auth.user?.roleId

    return role === 1 || role === 2 ? children : <Navigate to={'/admin'}/>
}

export default AdminRoutes