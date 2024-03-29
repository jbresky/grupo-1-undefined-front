import UsersTable from "../../Components/UsersTable";
import userGetUsers from "../../hooks/useUsers";
import { Heading, Stack } from "@chakra-ui/react";
import HomeSkeleton from "../../Components/UI/HomeSkeleton";
import AdminHeader from "../../Components/Layout/AdminHeader";

const Admin = () => {
    const { data: users, isLoading } = userGetUsers();

    if (isLoading) return <HomeSkeleton/>

return (
    <>
        <AdminHeader/>
        <Stack p={[0, 4]} margin={[1, 'auto']}>
            <Heading pt={4}>
                Usuarios
            </Heading>
            <UsersTable users={users} />
        </Stack>
    </>
)
}

export default Admin