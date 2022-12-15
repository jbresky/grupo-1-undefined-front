import React from 'react'
import { Flex, Heading, Box, HStack, Button, Text } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../app/features/authSlice';
import AdminMenu from '../Drawers/AdminMenu';

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
            <Heading color={'gray.100'} size={'lg'}>
                <Flex justify={'center'} gap={3}>
                    <Link _hover={0} as={RouterLink} to='/'>
                        AlkyBank
                    </Link>
                    {user && user.roleId === 2 ? (
                        <Text>{'- ' + user.firstName} 😎</Text>
                    ) : null
                    }
                </Flex>
            </Heading >
            <Box display={['block', 'block', 'none']}>
                <HeaderDrawer />
            </Box>
            <HStack display={['none', 'none', 'block']} fontSize={'19px'} color={'gray.100'} spacing={12}>
                {
                    user && user.roleId === 2 ? (
                        <>
                            <AdminMenu />
                            <Button _hover={{ color: 'gray' }} color={'white'} backgroundColor={'transparent'} onClick={handleLogout}>Logout</Button>
                        </>
                    ) : null
                }
                {user && user.roleId === 1 ? (
                    <>
                        <Link fontSize={'17px'} as={RouterLink} to='/transactions'>Movimientos</Link>
                        <Link fontSize={'17px'} as={RouterLink} to='/transactions/create'>Enviar dinero</Link>
                        <Link fontSize={'17px'} as={RouterLink} to='/profile'>Perfil</Link>
                        <Link fontSize={'17px'} onClick={handleLogout}>Logout</Link>
                    </>
                ) : null
                }
                {!user ? (
                    <>
                        <Link as={RouterLink} to='/login'>Log In</Link>
                        <Link as={RouterLink} to='/register'>Register</Link>
                    </>
                ) : null
                }
            </HStack>
        </Flex >
    )
}

export default Header