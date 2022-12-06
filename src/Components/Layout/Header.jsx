import React from 'react'
import {Flex, Heading } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';

const Header = () => {
    return (
        <Flex justify={'space-around'} p={2}>
            <Heading>AlkyBank</Heading>
            <HeaderDrawer />
        </Flex>
    )
}

export default Header