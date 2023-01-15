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
    useDisclosure,
    Link,
    Stack
} from '@chakra-ui/react'
import { useRef } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../app/features/authSlice'
import { isLogged } from '../../utils/isLogged'

export default function HeaderDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const logged = isLogged();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(authLogout())
        navigate('/');
    };

    return (
        <>
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
                            {logged ? (
                                <>
                                <Link as={RouterLink} to='/profile'>Mi perfil</Link>
                                <Link as={RouterLink} to='/transactions'>Movimientos</Link>
                                <Button onClick={handleLogout} color={'black'} textAlign={'left'}>Cerrar sesión</Button>
                                </>
                            ) : (
                                <>
                                 <Link as={RouterLink} to='/login'>Sign in</Link>
                                <Link as={RouterLink} to='/register'>Register</Link>
                                </>
                            )}
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}