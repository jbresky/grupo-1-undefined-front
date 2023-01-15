import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from '../services/http-request'

const fetchUsers = () => getRequest('/users/')
const fetchMe = () => getRequest('/auth/me/')
const fetchUserDetails = (id) => getRequest(`/users/${id}`)
const createUser = (user) => postRequest('/users/', user)
const updateUser = (user) => putRequest(`/users/${user.id}`, user)
const deleteUser = (id) => deleteRequest(`/users/${id}`)

const userGetUsers = (onSuccess, onError) =>
    useQuery(['users'], fetchUsers, {
        onSuccess,
        onError,
        select: (data) =>
            data.body.map((user) => ({ ...user, name: `${user.lastName} ${user.firstName}` }))
    })
export const useGetMe = (onSuccess, onError) =>
    useQuery(['me'], fetchMe, {
        onSuccess,
        onError,
        select: (data) => data.body,
    })

export const useGetUserDetails = (id, onSuccess, onError) =>
    useQuery(['userDetails', id], () => fetchUserDetails(id), {
        enabled: !!id,
        onSuccess,
        onError,
        select: (data) => data.body,
    })

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation(createUser, {
        onSuccess: (res) => {
            queryClient.invalidateQueries('users')
            console.log(res.message);
            // notification('success', res.message, 'light')
            navigate('/login')
        },
        onError: (error) => {
            // notification('error', `${error.response.data.message}`)
            console.log(error.response.data.message);
        },
    })
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient()

    return useMutation(updateUser, {
        onSuccess: (res) => {
            queryClient.invalidateQueries('me')
            // notification('success', res.message, 'light')
        },
        onError: (error) => {
            // notification('error', `${error.response.data.message}`)
            console.log(error.response.data.message);
        },
    })
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient()

    return useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
            // notification('success', 'Usuario eliminado', 'light')
        },
    })
}

export default userGetUsers