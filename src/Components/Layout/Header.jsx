import React from 'react'
import {Flex, Heading } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';

const Header = () => {
    return (
        <Flex background={'#2d3748'} justify={'space-between'} p={8}>
            <Heading color={'gray.100'}>AlkyBank</Heading>
            <HeaderDrawer />
        </Flex>
    )
}

export default Header