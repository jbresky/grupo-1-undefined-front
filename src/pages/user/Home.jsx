import React from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Balance from '../../Components/UI/Balance';
import { Box, Stack, Flex } from '@chakra-ui/react';
import Movimientos from '../../Components/UI/Movimientos';
import { useSelector } from 'react-redux';
import useGetBalance from '../../hooks/useBalance';
import { Outlet, useParams } from 'react-router';
import { useGetUserDetails } from '../../hooks/useUsers';

function Home() {

    const { user } = useSelector(state => state.auth)
    console.log(user);
    // const { data, isLoading} = useGetBalance();
    // const { data, isLoading } = useGetUserDetails(20);
    // console.log(data);
    // console.log(data);

    // const { balance } = data
    return (
        <>
            <Header />
            <Box mt={10}>
                <Flex mb={200} justify={'center'} alignItems={'center'}>
                    {/* <Stack w={'60%'} m={['0', 'auto', 'auto', 'auto']} p={[2, 2, 10]}> */}
                    <Stack w={'45%'}>
                        <Balance balance={user.balance} />
                        <Movimientos />
                    </Stack>
                    <Box w={'45%'}>
                        <Outlet />
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </>
    );
}

export default Home;
