import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postRequest} from '../services/http-request'
// import notification from './useToast';

const addTransaction = async (values) => {
    const response = await postRequest('/transactions/', values)
  
    console.log(response);
    return response
  }

  const useCreateTransaction = () => {
    const queryClient = useQueryClient()
    console.log(this);
  
    return useMutation(addTransaction, {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries('me')
        // notification('success', res.message)
      },
      onError: (error) => {
        // notification('success', `${error.response.data.message}`)
      },
    })
  }
  export default useCreateTransaction