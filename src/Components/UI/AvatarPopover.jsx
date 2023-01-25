import { Avatar } from "@chakra-ui/react"
import { useRef } from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from "react-router"

export default function AvatarPopover({display}) {


  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/profile')
  }

    const initialFocusRef = useRef()
    return (
      <Box display={display}>
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
            <Avatar _hover={{cursor: 'pointer'}}/>
        </PopoverTrigger>
        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Agrega una foto de perfil
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody fontSize={'18px'}>
            Los usuarios que suben una foto o avatar disfrutan de una mejor experiencia!
          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
          >
            <ButtonGroup size='sm'>
              <Button onClick={handleNavigate} colorScheme='cyan'>Subir una foto</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
      </Box>
    )
  }