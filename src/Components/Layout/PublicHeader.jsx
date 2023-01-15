import React from 'react'
import { Flex, Heading, Box, HStack } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';
// import { authLogout } from '../../app/features/authSlice';

const PublicHeader = () => {
    return (
        // <Flex
        //     alignItems={'center'}
        //     background={'gray.800'}
        //     justify={['space-between', 'space-between', 'space-around']}
        //     p={6}
        // >
        //     <Heading color={'gray.100'} size={'lg'}>
        //         <Link _hover={0} as={RouterLink} to='/'>
        //             AlkyBank
        //         </Link>
        //     </Heading >
        //     <Box display={['block', 'block', 'none']}>
        //         <HeaderDrawer />
        //     </Box>
        //     <HStack>
        //         <Link as={RouterLink} to='/login'>Log In</Link>
        //         <Link as={RouterLink} to='/register'>Register</Link>
        //     </HStack>
        // </Flex >
        <Flex
            alignItems={'center'}
            background={'gray.800'}
            justify={['space-between', 'space-between', 'space-around']}
            p={6}
        >
            <Heading color={'gray.100'} size={'lg'}>
                <Link _hover={0} as={RouterLink} to='/'>
                    AlkyBank
                </Link>
            </Heading >
            <Box display={['block', 'block', 'none']}>
                <HeaderDrawer />
            </Box>
            <HStack display={['none', 'none', 'block']} fontSize={'19px'} color={'gray.100'} spacing={12}>
                <HStack spacing={10}>
                    <Link as={RouterLink} to='/login'>Log In</Link>
                    <Link as={RouterLink} to='/register'>Register</Link>
                </HStack>
            </HStack>
        </Flex >
    )
}

export default PublicHeader