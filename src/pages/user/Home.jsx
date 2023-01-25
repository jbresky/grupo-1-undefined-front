import React from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Balance from '../../Components/UI/Balance';
import { Box, Stack, Flex } from '@chakra-ui/react';
import Movimientos from '../../Components/UI/Movimientos';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { isLoggedAdmin } from '../../utils/isLogged';
import AdminHeader from '../../Components/Layout/AdminHeader';

function Home() {

    const { user } = useSelector(state => state.auth)
    const isAdmin = isLoggedAdmin(); 

    return (
        <>
        {isAdmin ? <AdminHeader/> : <Header/>}
            <Box mt={10}>
                <Flex m={'auto'} gap={30} direction={['column', 'column', 'row']} mb={200} justify={'center'} alignItems={'flex-start'}>
                    {/* <Stack w={'60%'} m={['0', 'auto', 'auto', 'auto']} p={[2, 2, 10]}> */}
                    <Stack m={['auto', 'auto', 0]} w={['95%', '95%', '45%', '45%']}>
                        <Balance balance={user.balance} />
                        <Movimientos />
                    </Stack>
                    <Box w={['90%', '100%', '45%', '45%']}>
                        <Outlet />
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </>
    );
}

export default Home;
