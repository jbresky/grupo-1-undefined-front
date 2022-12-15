import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { categorySchema } from '../YupValidator/schemas'
import {useCreateCategory} from '../../hooks/useCategory'
import { useRef } from 'react'
import CreateForm from '../Category/CreateForm'

export default function CreateCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { mutate: createCategory } = useCreateCategory()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Button onClick={onOpen}>Crear categoria</Button>
  
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik initialValues={{
              name: '',
              description: ''
            }}
              validationSchema={categorySchema}
              onSubmit={values => createCategory(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <CreateForm
                initialValues={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                onclick={onClose}
                />
              )}

            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

