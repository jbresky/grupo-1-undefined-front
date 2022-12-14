import { Box, TableContainer, Tbody, Thead,Table, Tr, Th, Td } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { useTable, useSortBy, usePagination } from "react-table";

const UsersTable = ({ users }) => {

    const navigate = useNavigate()

    const userDetail = (id) => {
        navigate(`/admin/user/${id}`)
    }

    return (
        <TableContainer maxWidth={'60vw'} p={4}>
            <Table  size={'md'} variant='striped'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Apellido</Th>
                        <Th>Nombre</Th>
                        <Th>Email</Th>
                        {/* <Th>Balance</Th>
                        <Th>Detalle</Th> */}
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user, index) => (
                        <Box as="tr">
                            <Td key={index}>
                                {user.id}
                            </Td>
                            <Td key={index}>
                                {user.lastName}
                            </Td>
                            <Td key={index}>
                                {user.firstName}
                            </Td>
                            <Td key={index}>
                                {user.email}
                            </Td>
                            {/* <Td key={index}>
                                {user.balance}
                            </Td>
                            <Td key={index}>
                                icono para ver usuario
                            </Td> */}
                        </Box>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable