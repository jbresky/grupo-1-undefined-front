import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
const Balance = ({ props }) => {
  return (
      <Card boxShadow={'base'} w={['100%', '100%', '500px']} align='flex-start'>
        <CardHeader pb={0}>
          <Heading size='md'>Saldo de Alkybank</Heading>
        </CardHeader>
        <CardBody>
          <Heading size={'2xl'}>$0</Heading>
          <Text pt={2} fontSize={'14px'}>Disponible</Text>
        </CardBody>
        <CardFooter pt={0}>
          <Button as={RouterLink}
          borderRadius={'1.5rem'}
          _hover={{ backgroundColor: '#5f7ad1' }}
          backgroundColor={'#4a64ba'}
          color={'white'}
          to='/transactions/create'
          >Transferir fondos</Button>
        </CardFooter>
      </Card>
  )
}

export default Balance