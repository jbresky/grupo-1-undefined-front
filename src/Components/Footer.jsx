import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
            <Flex fontSize={18} as='footer' alignItems={'flex-start'} bg={'#edf2f7'} flexDir={'column'} p={3}>
                <Flex p={4} gap={50}>
                    <Box className="us">
                        <Heading fontSize={20} pb={3}>Nosotros</Heading>
                        <Stack>
                            <Text>Sobre nostros</Text>
                            <Text>Trabaja en AlkyBank</Text>
                            <Text>Blog</Text>
                            <Text>FAQ</Text>
                            <Text>Gaming</Text>
                        </Stack>
                    </Box>
                    <Box className="contact">
                        <Heading fontSize={20} pb={3}>Contacto</Heading>
                        <Text pb={3}>hola@alkybank.com</Text>
                        <HStack fontSize={'22px'}>
                            <AiOutlineInstagram />
                            <BsTwitter />
                            <FaFacebookSquare />
                        </HStack>
                    </Box>
                </Flex>
                <Text margin={'auto'} p={2}>&copy; Alkybank 2022. Todos los derechos reservados</Text>
            </Flex>
        </>
    )
}