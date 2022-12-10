import React from 'react'
import {Flex, Heading } from '@chakra-ui/react';
import HeaderDrawer from '../Drawers/HeaderDrawer';

const Header = () => {
    return (
        <Flex justify={'space-around'} p={4} mt={5} mb={5}>
            <Heading>AlkyBank</Heading>
            <HeaderDrawer />
        </Flex>
    )
}

export default Header