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
    useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
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
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton w={'40px'} />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <p>Links...</p>
                        <p>Links...</p>
                        <p>Links...</p>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}