import { Box, TableContainer, Tbody, Thead,Table, Tr, Th, Td } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const UsersTable = ({ users }) => {

    const navigate = useNavigate()

    const userDetail = (id) => {
        navigate(`/admin/user/${id}`)
    }

    return (
        <TableContainer whiteSpace={'nowrap'} p={4}>
            <Table size={'md'} variant='striped'>
                <Thead>
                    <Tr borderTop={'1px'}>
                        <Th>ID</Th>
                        <Th>Apellido</Th>
                        <Th>Nombre</Th>
                        <Th>Email</Th>
                        <Th>Balance</Th>
                        <Th>Detalle</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map(user => (
                        <Box as="tr">
                            <Td>
                                {user.id}
                            </Td>
                            <Td>
                                {user.lastName}
                            </Td>
                            <Td>
                                {user.firstName}
                            </Td>
                            <Td>
                                {user.email}
                            </Td>
                            <Td>
                                user.balance
                            </Td>
                            <Td>
                                icono para ver usuario
                            </Td>
                        </Box>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable