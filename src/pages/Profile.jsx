import { Box, Heading, Card, CardHeader, CardBody, Stack, Text, StackDivider, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import Spacing from '../Components/Spacing'
import { BiChevronLeft } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import Header from '../Components/Layout/Header'

export default function Profile() {
    return (
        <>
        <Header/>
            <Card background={'gray.50'} color={'gray.800'} borderRadius={'0'} p={4}>
               
                <CardHeader w={['95%', '80%', '80%', '60%']} margin={'auto'}>
                <Box w={'40px'} pb={4}>
                    <Link as={RouterLink} to="/">
                        <BiChevronLeft fontSize={25}/>
                    </Link>
                </Box>
                    <Flex justify={'space-between'}>
                        <Heading size={['sm', 'md', 'md', 'lg']}>Personal details</Heading>
                        <Text fontSize={['sm', 'md', 'md', 'lg']} textDecoration={'underline'}>Edit</Text>
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
                                Name shown
                            </Text>
                        </Box>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                Last name
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                Last name here
                            </Text>
                        </Box>
                        <Box>
                            <Heading size={['sm', 'md', 'md', 'md']}>
                                Email
                            </Heading>
                            <Text pt='2' fontSize={['sm', 'md', 'md', 'lg']}>
                                joaquin@alkemy.com
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
            </Card>
            {/* <Spacing bg={'gray.800'} /> */}
        </>
    )
}