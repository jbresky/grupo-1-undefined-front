import { CardHeader, Flex, Heading, Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import EditButton from "../../Components/EditProfile/EditButton";


export default function AvatarProfile() {

    const { user } = useSelector(state => state.auth)
    return (
        <CardHeader w={['100%', '80%', '80%', '60%']} margin={'auto'}>
            <Flex align={'center'} justify={'space-between'}>
                <Heading size={['sm', 'md', 'md', 'lg']}>Avatar</Heading>
                <EditButton action={user.avatar === null ? 'add' : 'edit'} />
            </Flex>
            <Avatar mt={'3rem'} size='xl' />
        </CardHeader>
    )
}