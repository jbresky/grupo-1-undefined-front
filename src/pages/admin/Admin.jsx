import Header from "../../Components/Layout/Header";
import UsersTable from "../../Components/UsersTable";
import userGetUsers from "../../hooks/useUsers";
import { Heading, Stack } from "@chakra-ui/react";

const Admin = () => {
    const { data: users, isLoading } = userGetUsers();

    if (isLoading) return 'Loading...'

return (
    <>
        <Header />
        <Stack p={4} margin={'auto'} ml={4}>
            <Heading pt={4}>
                Usuarios
            </Heading>
            <UsersTable users={users} />
        </Stack>
    </>
)
}

export default Admin