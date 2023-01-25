import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import EditForm from './EditForm';

function EditButton({ action, children }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const { user } = useSelector(state => state.auth)

  return (
    <>
      <Button onClick={onOpen}>{action === 'add' ? 'Add' : 'Edit' }</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar datos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {children}
            {/* <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input ref={initialRef} value={`${user.firstName}`} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Apellido</FormLabel>
              <Input value={`${user.lastName}`} />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm onclick={onClose}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default EditButton