import { Card, Heading, Text, CardBody, CardFooter, CardHeader, Link } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'

const Movimientos = () => {
    return (
        <Card boxShadow={'base'}  w={['100%', '100%', '500px']} align='flex-start'>
            <CardHeader pb={0}>
                <Heading size={'md'}>Movimientos recientes</Heading>
            </CardHeader>
            <CardBody pb={0}>
                {/* de no tener balance */}
                <Text>Consulte el dinero enviado y recibido. Aqui encontrara sus movimientos recientes con Alkybank</Text>
            </CardBody>
            <CardFooter>
                <Link as={RouterLink} color={'#1072eb'} to='/transactions'>
                    Mostrar todos
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Movimientos