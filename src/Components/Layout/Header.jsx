import React from 'react'
import { Flex, Heading, Box, HStack } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
        alignItems={'center'}
        background={'gray.800'} 
        justify={['space-between', 'space-between', 'space-around']} 
        p={6}
        >
            <Heading color={'gray.100'}>
                <Link textDecoration={'none'} as={RouterLink} to='/'>
                AlkyBank
                </Link>
                </Heading>
            <Box display={['block', 'block', 'none']}>
                <HeaderDrawer />
            </Box>
                <HStack display={['none', 'none', 'block']}fontSize={'19px'} color={'gray.100'} spacing={12}>
                    {/* Se podría crear un componente para los links ya que se está repitiendo en el drawer */}
                    <Link as={RouterLink} to='/profile'>Mi perfil</Link>
                <Link as={RouterLink} to='/transactions/create'>Enviar dinero</Link>
                <Link as={RouterLink} to='/transactions'>Movimientos</Link>
                <Link as={RouterLink} to='/login'>Log In</Link>
                <Link as={RouterLink} to='/register'>Register</Link>

                </HStack>
        </Flex>
    )
}

export default Header