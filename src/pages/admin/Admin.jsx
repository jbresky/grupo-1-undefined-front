import UsersTable from "../../Components/UsersTable";
import userGetUsers from "../../hooks/useUsers";
import { Heading, Stack } from "@chakra-ui/react";
import HeaderForAdmin from "../../Components/Layout/HeaderForAdmin";
import { useSelector } from "react-redux";

const Admin = () => {
    const { data: users, isLoading } = userGetUsers();
    const {user} = useSelector(state => state.auth)

    if (isLoading) return 'Loading...'

return (
    <>
        <HeaderForAdmin/>
        <Stack w={'80vw'} p={4} margin={'auto'}>
            <Heading pt={4}>
                Usuarios
            </Heading>
            <UsersTable users={users} />
        </Stack>
    </>
)
}

export default Admin