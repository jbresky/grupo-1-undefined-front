import React from 'react'
import { Flex, Heading, Box, HStack, Button, Text, Avatar, AvatarBadge } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../app/features/authSlice';
import AdminMenu from '../Drawers/AdminMenu';

const AdminHeader = () => {

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
            background={'gray.800'}
            justify={['space-between', 'space-between', 'space-around']}
            p={6}
        >
            <Heading color={'gray.100'} size={'lg'}>
                <Flex justify={'center'} gap={3}>
                    <Link _hover={0} as={RouterLink} to='/'>
                        AlkyBank
                    </Link>
                    <Text>{'- ' + user.firstName} 😎</Text>
                </Flex>
            </Heading >
            <Box display={['block', 'block', 'none']}>
                <HeaderDrawer />
            </Box>
            <HStack display={['none', 'none', 'block']} fontSize={'19px'} color={'gray.100'} spacing={12}>
                <AdminMenu />
                <Button _hover={{ color: 'gray' }} color={'white'} backgroundColor={'transparent'} onClick={handleLogout}>Logout</Button>
            </HStack>
        </Flex >
    )
}

export default AdminHeader