import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/usersApi';

const fetchUsers = () => getUsers();

const userGetUsers = (onSuccess, onError) =>
    useQuery(['users'], fetchUsers, {
        onSuccess,
        onError,
        select: (data) =>
            data.body.map((user) => ({ ...user, name: `${user.lastName} ${user.firstName}` }))
    })

export default userGetUsers