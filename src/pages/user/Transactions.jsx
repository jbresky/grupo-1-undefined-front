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
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import useCreateTransaction from "../../hooks/useTransaction";
import { useGetMe } from "../../hooks/useUsers";
import useGetBalance from "../../hooks/useBalance";
import HomeSkeleton from "../../Components/UI/HomeSkeleton";

function Transactions() {

  // const { data: users } = userGetUser()

  // const { data: me, isLoading: isLoadingMe } = useGetMe();

  const { data, isLoading } = useGetBalance()

  const { transactions } = data

  // const {mutate: transferTo } = useCreateTransaction
  if(isLoading){
    return <HomeSkeleton/>
  }
  // const {user} = useSelector(state => state.auth) 
  // const [transactions, setTransactions] = useState([]);
  // const navigate = useNavigate();
  // const localStor = localStorage.read('alkybank');
  // console.log(localStor.userInfo.id);

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     const transactions = await axios.get(`/transactions/${localStor.userInfo.id}`);
  //     setTransactions(transactions.data?.body ?? []);
  //   };

  //   fetchTransactions();
  // }, []);

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
            {transactions?.map(transaction => {
              return (
                <Tr key={transaction.id}>
                  <Td>{transaction.description}</Td>
                  <Td>{transaction.amount}</Td>
                  <Td>{transaction.date}</Td>
                  {/*<Td> --> transaction.category (repo Fede) De: if category.id == 1 etc... */ }
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
