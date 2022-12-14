import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    IconButton,
    Input,
    useDisclosure,
    Link,
    Stack
} from '@chakra-ui/react'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function HeaderDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button> */}
            <IconButton
                background={'gray.100'}
                ref={btnRef}
                onClick={onOpen}
                icon={<GiHamburgerMenu />}
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                w={'300px'}
            >
                <DrawerOverlay
                />
                <DrawerContent
                    background={'#2d3748'}
                    color={'gray.100'}
                >
                    <DrawerCloseButton pt={4} w={'40px'} />
                    <DrawerHeader
                    >Menu</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={5}>
                            <Link as={RouterLink} to='/profile'>Mi perfil</Link>
                            <Link as={RouterLink} to='/'>Enviar dinero</Link>
                            <Link as={RouterLink} to='/'>Movimientos</Link>
                            <Link as={RouterLink} to='/'>Gastos</Link>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='teal'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}