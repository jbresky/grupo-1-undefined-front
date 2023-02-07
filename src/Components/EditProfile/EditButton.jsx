import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react';

function EditButton({ action, children }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Button onClick={onOpen}>{action === 'add' ? 'Add' : 'Edit'}</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditButton