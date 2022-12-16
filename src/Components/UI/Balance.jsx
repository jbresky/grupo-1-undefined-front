import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button } from '@chakra-ui/react'
// import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router';


const Balance = ({ balance }) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/transaction-create')
  }
  
  return (
    // <Card boxShadow={'base'} w={['100%', '100%', '500px']} align='flex-start'>
    <Card boxShadow={'base'} w={'100%'} align='flex-start'>
      <CardHeader pb={0}>
        <Heading size='md'>Saldo de Alkybank</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={'2xl'}>${balance}</Heading>
        <Text pt={2} fontSize={'14px'}>Disponible</Text>
      </CardBody>
      <CardFooter pt={0}>
        <Button
          borderRadius={'1.5rem'}
          _hover={{ backgroundColor: '#5f7ad1' }}
          backgroundColor={'#4a64ba'}
          color={'white'}
          onClick={handleNavigate}
        >Transferir fondos</Button>
      </CardFooter>
    </Card>
  )
}

export default Balance