import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import CreateCategory from './CreateCategory'
import EditCategory from './EditCategory'

const AdminMenu = () => {
    return (
        <Menu>
            <MenuButton color={'black'} as={Button} rightIcon={<BsChevronDown />}>
                Features
            </MenuButton>
            <MenuList>
                <MenuItem fontSize={'18px'} color={'black'}>
                    <CreateCategory />
                </MenuItem>
                <MenuItem fontSize={'18px'} color={'black'}>
                    <EditCategory/>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default AdminMenu