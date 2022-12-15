import {useQuery} from '@tanstack/react-query'

import {getRequest} from '../services/httpRequest'

const fetchBalance = () => getRequest('/transactions/me')

const useGetBalance = (onSuccess, onError) =>
  useQuery(['balance'], fetchBalance, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export default useGetBalance