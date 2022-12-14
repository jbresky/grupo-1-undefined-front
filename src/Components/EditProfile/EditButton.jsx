import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfileDrawer } from '../../app/uiSlice';
import EditForm from './EditForm';
import Edit from './Edit';

function EditButton() {
  const { profileDrawer } = useSelector(state => state.ui)
  const dispatch = useDispatch();

  const toggleDrawer = () => dispatch(toggleProfileDrawer())

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Edit /> */}
            <EditForm/>
            {/* <EditForm/> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditButton