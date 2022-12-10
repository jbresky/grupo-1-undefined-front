import { Box, Heading, Card, CardHeader, CardBody, Stack, Text, StackDivider, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import Spacing from '../Components/Spacing'
import { BiChevronLeft } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'

export default function Profile() {
    return (
        <>
            <Card background={'gray.800'} color={'gray.100'} borderRadius={'0'} p={2}>
               
                <CardHeader pt={3}>
                <Box pb={4}>
                    <Link as={RouterLink} to="/">
                        <BiChevronLeft fontSize={25}/>
                    </Link>
                </Box>
                    <Flex justify={'space-between'}>
                        <Heading size='md'>Personal details</Heading>
                        <Text textDecoration={'underline'}>Edit</Text>
                    </Flex>
                </CardHeader>

                <CardBody margin={'auto'} background={'gray.700'} w={'95%'} mb={10} borderRadius={'5px'}>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs'>
                                Name
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Name shown
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>
                                Last name
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Last name here
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>
                                Email
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                joaquin@alkemy.com
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs'>
                                CUIT
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                20410498244
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Spacing bg={'gray.800'} />
        </>
    )
}