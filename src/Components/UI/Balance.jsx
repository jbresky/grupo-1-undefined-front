import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Button } from '@chakra-ui/react'
// import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux'
import useGetBalance from '../../hooks/useBalance';
const Balance = () => {

  // const { user } = useSelector(state => state.auth)

  const navigate = useNavigate();

  const { data } = useGetBalance();

  let balance;
  if(data){
    balance = data.balance
    // console.log(balance);
  }
  console.log(balance);
  // const { balance } = data

  const handleNavigate = () => {
    navigate('/transaction-create')
  }

  return (
    // <Card boxShadow={'base'} w={['100%', '100%', '500px']} align='flex-start'>
    <Card boxShadow={'base'} w={'100%'} align={['flex-start']}>
      <CardHeader pb={0}>
        <Heading size='md'>Saldo de Alkybank</Heading>
      </CardHeader>
      <CardBody>
        <Heading size={'2xl'}>$
          {
            // user?.balance ? user.balance : '0,00'
            balance
          }
        </Heading>
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