import { Box, TableContainer, Tbody, Thead, Table, Tr, Th, Td, IconButton, } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { FcSearch } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const UsersTable = ({ users }) => {

    const navigate = useNavigate()

    const userDetail = (id) => {
        navigate(`/admin/user/${id}`)
    }

    return (
        <TableContainer pt={8}>
            <Table size={'md'} border={'1px'} borderStyle={'groove'} variant='striped' colorScheme='gray'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Apellido</Th>
                        <Th>Nombre</Th>
                        <Th>Email</Th>
                        <Th>Balance</Th>
                        <Th>Detalle</Th>
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
                            <Td key={index}>
                                $ {user.balance}
                            </Td>
                            <Td key={index}>
                                <Link to={`/admin/user${user.id}`}>
                                    <IconButton size={'lg'}
                                        background={'transparent'}
                                        _hover={{ transform: 'scale(1.5)' }}
                                        // onClick={userDetail(user.id)}
                                        icon={<FcSearch />} />
                                </Link>
                            </Td>
                        </Box>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable