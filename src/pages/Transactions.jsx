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
} from '@chakra-ui/react'
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await axios.get("/transactions");
      setTransactions(transactions.data?.body ?? []);
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <TableContainer padding="30px 15px">
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Amount</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map(transaction => {
              return (
                <Tr key={transaction.id}>
                  <Td>{transaction.description}</Td>
                  <Td>{transaction.amount}</Td>
                  <Td>{transaction.date}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex padding="0 15px">
        <Button colorScheme="teal" mb={8} type="submit" onClick={() => { navigate('/transactions/create') }}>
          Create
        </Button>
      </Flex>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Transactions;
