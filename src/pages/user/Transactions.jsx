import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Flex,
  Heading,
  Box,
} from '@chakra-ui/react'
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HomeSkeleton from "../../Components/UI/HomeSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../app/actions/transactionActions";
import Filter from "./TransactionFilter";

function Transactions() {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)
  const { transactionsFilter, filter } = useSelector(state => state.transactions)

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getTransactions(user.id, filter));

    setTimeout(() => setLoading(false), 1000);
  }, [dispatch, filter]);

  return (
    <div>
      <header>
        <Header />
      </header>
      {isLoading ? <HomeSkeleton /> : (
        <div>
          {!transactionsFilter ? <Heading fontSize={30} mt={10} ml={10}>No transactions to see here...</Heading> : ''}
          <Box mt={'30px'} ml={'40px'}>
            <Filter currentFilter={filter}></Filter>
          </Box>
          <TableContainer padding="30px 15px">
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>Description</Th>
                  <Th>Type</Th>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactionsFilter?.map(transaction => {
                  return (
                    <Tr key={transaction.id}>
                      <Td>{transaction.description}</Td>
                      <Td>{transaction.type}</Td>
                      <Td>$ {transaction.amount}</Td>
                      <Td>{transaction.createdAt}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex padding="0 15px">
            <Box height={'8rem'}/>
          </Flex>
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Transactions;
