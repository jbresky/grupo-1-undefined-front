import React, { useRef } from "react";
import { Stack, FormLabel, Button, Input, Container, FormErrorMessage, FormControl } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Edit = ({
  initialValues,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
  loading,
  onclick
}) => {

  const { user } = useSelector(state => state.auth)
  const { firstName, lastName, password } = initialValues;
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input ref={initialRef} value={`${user.firstName}`} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Apellido</FormLabel>
        <Input value={`${user.lastName}`} />
      </FormControl>
    </>
    // <form onSubmit={handleSubmit}>
    //   <Container maxW={"md"} margin={"3rem auto"}>
    //     <Stack direction={"column"} spacing={4}>

    //       <FormControl isInvalid={!!errors.firstName && touched.firstName}>
    //         <FormLabel htmlFor="firstName">Nombre</FormLabel>
    //         <Input
    //           id="firstName"
    //           type="text"
    //           name="firstName"
    //           value={firstName}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           autoComplete="off"
    //         />
    //           <FormErrorMessage>{errors.firstName}</FormErrorMessage>
    //       </FormControl>

    //       <FormControl isInvalid={!!errors.lastName && touched.lastName}>
    //         <FormLabel htmlFor="lastName">Apellido</FormLabel>
    //         <Input
    //           id="lastName"
    //           name="lastName"
    //           type="text"
    //           value={lastName}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           autoComplete="off"
    //         />
    //           <FormErrorMessage>
    //             {errors.lastName}
    //           </FormErrorMessage>
    //       </FormControl>

    //       <Button onClick={onclick} disabled={loading} type="submit">Editar</Button>
    //     </Stack>
    //   </Container>
    // </form>
  );
};

export default Edit;
