import React from 'react'
import { Flex, Heading, Box, HStack, Button, Text, Avatar, AvatarBadge } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../app/features/authSlice';
import AvatarPopover from '../UI/AvatarPopover';
import { isLogged, isLoggedAdmin } from '../../utils/isLogged';

const Header = () => {
    // const checkLoggedUser = isLogged()
    // const checkLoggedAdmin = isLoggedAdmin()

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(authLogout())
        navigate('/login')
        console.log(user)
    }

    return (
        <Flex
            alignItems={'center'}
            background={'gray.700'}
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
                    <Link fontSize={'17px'} as={RouterLink} to='/transactions'>Movimientos</Link>
                    <Link fontSize={'17px'} as={RouterLink} to='/transaction-create'>Enviar dinero</Link>
                    <Link fontSize={'17px'} as={RouterLink} to='/profile'>Perfil</Link>
                    <Link fontSize={'17px'} onClick={handleLogout}>Logout</Link>
                    {user.avatar !== null ? <Avatar /> : (
                        <AvatarPopover display={['none', 'none', 'none', 'block']} />
                    )}
                    {/* if user.avatar mostrar el avatar con componente avatar, sino, mostrar este popover */}
                </HStack>
            </HStack>
        </Flex >
    )
}

export default Header