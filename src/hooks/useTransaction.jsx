import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postRequest} from '../services/httpRequest'

const addTransaction = async (values) => {
    const response = await postRequest('/transactions/', values)
  
    return response
  }

  const useCreateTransaction = () => {
    const queryClient = useQueryClient()
  
    return useMutation(addTransaction, {
      onSuccess: (res) => {
        queryClient.invalidateQueries('me')
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    })
  }

  export default useCreateTransaction