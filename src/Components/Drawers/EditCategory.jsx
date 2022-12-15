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
import useGetCategory, { useEditCategory } from '../../hooks/useCategory'
import { useRef } from 'react'
import EditForm from '../Category/EditForm'

export default function EditCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data: categories } = useGetCategory();
    console.log(categories);

    const { mutate: editCategory } = useEditCategory()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Button _hover={0} backgroundColor='transparent' onClick={onOpen}>Editar categoria</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                {/* <ModalOverlay /> */}
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Formik initialValues={{
                            category: '',
                            name: '',
                            description: ''
                        }}
                            validationSchema={categorySchema}
                            onSubmit={values => editCategory({ id: values.category, ...values })}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            }) => (
                                <EditForm
                                    initialValues={values}
                                    handleSubmit={handleSubmit}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                    onclick={onClose}
                                    categories={categories}
                                />
                            )}

                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

