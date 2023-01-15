import { Box, TableContainer, Tbody, Thead, Table, Tr, Th, Td, IconButton, } from '@chakra-ui/react'

const TransactionsTable = ({transaction}) => {
    return (
        <TableContainer pt={8}>
        <Table size={'md'} border={'1px'} borderStyle={'groove'} variant='striped' colorScheme='gray'>
            <Thead>
                <Tr>
                    {/* <Th>Monto</Th> */}
                    <Th>Tipo</Th>
                    <Th>Fecha</Th>
                    <Th>Categoria</Th>
                    <Th>Descripcion</Th>
                </Tr>
            </Thead>
            <Tbody>
                    <Box as="tr">
                        <Td >
                            {transaction.amount}
                        </Td>
                        <Td >
                            {transaction.categoryId}
                        </Td>
                        <Td key={index}>
                            {transaction.date}
                        </Td>
                        <Td key={index}>
                            {transaction.description}
                        </Td>
                    </Box>
            </Tbody>
        </Table>
    </TableContainer>
    )
}

export default TransactionsTable