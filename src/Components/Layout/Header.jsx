import React from 'react'
import { Flex, Heading, Box, HStack, Button } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../app/features/authSlice';

const Header = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(authLogout())
        navigate('/login')
    }
    
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
            <HStack display={['none', 'none', 'block']} fontSize={'19px'} color={'gray.100'} spacing={12}>
                {user ? (
                    <>
                        <Link as={RouterLink} to='/transactions'>Movimientos</Link>
                        <Link as={RouterLink} to='/transactions/create'>Enviar dinero</Link>
                        <Button color={'black'} onClick={handleLogout}>Logout</Button>
                    </>
                ) :
                    <>
                        <Link as={RouterLink} to='/login'>Log In</Link>
                        <Link as={RouterLink} to='/register'>Register</Link>

                    </>
                }
            </HStack>
        </Flex>
    )
}

export default Header