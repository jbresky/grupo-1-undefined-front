import { Box, Heading, Card, CardHeader, CardBody, Stack, Text, StackDivider, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { Link as RouterLink, Outlet, useNavigate } from 'react-router-dom'
import Header from '../../Components/Layout/Header'
import EditButton from '../../Components/EditProfile/EditButton'

import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
    const { user } = useSelector(state => state.auth)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Header />
            <Card background={'gray.50'} color={'gray.800'} borderRadius={'0'} p={[0, 4]}>

                <CardHeader w={['100%', '80%', '80%', '60%']} margin={'auto'}>
                    <Box w={'40px'} pb={4}>
                        <Link as={RouterLink} to={'/'}>
                            <BiChevronLeft fontSize={25} />
                        </Link>
                    </Box>
                    <Flex align={'center'} justify={'space-between'}>
                        <Heading size={['sm', 'md', 'md', 'lg']}>Personal details</Heading>
                        <EditButton />
                    </Flex>
                </CardHeader>

                <CardBody
                    margin={'auto'}
                    background={'gray.100'}
                    color={'gray.800'}
                    w={['95%', '80%', '80%', '60%']} mb={10}
                    borderRadius={'5px'}
                >
                    <Stack divider={<StackDivider background={'gray.300'} />} spacing='4'>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                Name
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                {user.firstName}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                Last name
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                {user.lastName}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                Email
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                {user.email}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                CUIT
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                20410498244
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            <Outlet/>
            </Card>
            {user.avatar ? (
                ''
            ) : null
            }
            {/* Si user.avatar mostrar componente de editar avatar (el popover esta pero como un texto de "editar avatar", cuando hace click se renderiza el Outlet) */}
            {/* una vez que se edita, manejar el navigate para que vuelva a /profile        */}
        </>
    )
}