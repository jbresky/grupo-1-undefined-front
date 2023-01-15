import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Layout/Header'
import PublicHeader from '../Components/Layout/PublicHeader'
import RegisterForm from '../Components/RegisterForm/RegisterForm'
import { isLogged } from '../utils/isLogged'
import { Link as RouterLink } from 'react-router-dom'

const Register = () => {
  const loggedUser = isLogged()

  return (
    <div>
      {loggedUser ? (
        <Header />
      ) : (
        <PublicHeader />
      )}
      <Flex pb={'100px'} m={'auto'} w={['90%', '80%', '500px', '500px']} direction={'column'} alignItems={'left'}>
        <RegisterForm />
        <Box>
          ¿Ya tienes una cuenta? <Link as={RouterLink} _hover={{ color: 'black' }} color={'#635bff'} to='/login'>Sign in</Link>
        </Box>
      </Flex>
    </div>
  )
}

export default Register