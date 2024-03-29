import { Box, Flex, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react"
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <>
            <Flex as='footer' alignItems={'flex-start'} bg={'#edf2f7'} flexDir={'column'} p={3}>
                <Flex direction={['column', 'column', 'row']} p={4} gap={['20px', '50px']}>
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
                            <Link href="https://github.com/jbresky/grupo-1-undefined-front">
                                <AiFillGithub />
                            </Link>
                        </HStack>
                    </Box>
                </Flex>
                <Text margin={'auto'} p={2}>&copy; Alkybank 2022. Todos los derechos reservados</Text>
            </Flex>
        </>
    )
}