import React from "react";
import { FormLabel, Button, Input, Flex, FormErrorMessage, FormControl, Heading, Select } from "@chakra-ui/react";

const EditForm = ({
    formBackground,
    initialValues,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    categories
}) => {
    const { name, description } =
        initialValues;

    return (
        <form onSubmit={handleSubmit}>
            <Flex align="center" justify="center">
                <Flex
                    flexDirection="column"
                    bg={formBackground}
                    p={12}
                    borderRadius={5}
                    w={'500px'}
                >
                    <Heading fontSize={'26px'} fontWeight={'bold'} p={4} mb={4}>Editar categoria</Heading>
                    <FormControl pb={6}>
                        <FormLabel htmlFor="name">Nombre</FormLabel>
                        <Select name="category" onChange={handleChange}>
                            {categories.map((category) => {
                                return <option key={category.id} value={category.id}>{category.name}</option>;
                            })}
                        </Select>
                    </FormControl>
                    <FormControl pb={6} isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="description">Nuevo nombre</FormLabel>
                    <Input
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        background='white'
                        placeholder='Gula...'
                    />
                     <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl pb={6} isInvalid={!!errors.description && touched.description}>
                        <FormLabel htmlFor="description">Descripcion</FormLabel>
                        <Input
                            name="description"
                            value={description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            background='white'
                        />
                        <FormErrorMessage>
                            {errors.description}
                        </FormErrorMessage>
                    </FormControl>

                    <Button color={'white'} background="blue.700" type="submit">Submit</Button>
                </Flex>
            </Flex>
        </form>
    );
};

export default EditForm;