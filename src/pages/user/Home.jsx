import React from 'react';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Balance from '../../Components/UI/Balance';
import { Box, Stack } from '@chakra-ui/react';
import Movimientos from '../../Components/UI/Movimientos';

function Home() {
    return (
        <>
            <Header />
            <Box mt={10} mb={10}>
                <Stack w={'100%'} m={['0', 'auto', 'auto', 'auto']} p={[2, 2, 10]}>
                    <Balance />
                    <Movimientos />
                </Stack>
            </Box>
            <Footer />
        </>
    );
}

export default Home;
