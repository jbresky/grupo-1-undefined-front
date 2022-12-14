import React from 'react'
import { Flex, Heading, Box, HStack, Text } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const HeaderForAdmin = ({admin}) => {
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
                    <Text>{admin}</Text>
                    <Link as={RouterLink} to='/profile'>Categorias</Link>
                </HStack>
        </Flex>
    )
}

export default HeaderForAdmin