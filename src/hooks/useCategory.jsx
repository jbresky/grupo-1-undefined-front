import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

import {getRequest, postRequest, putRequest} from '../services/http-request'

const fetchCategory = () => getRequest('/categories/')
const createCategory = (category) => postRequest('/categories/', category)
const editCategory = (category) => putRequest(`/categories/${category.id}`, category)

const useGetCategory = (onSuccess, onError) =>
  useQuery(['category'], fetchCategory, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

  export const useCreateCategory = () => {
    const queryClient = useQueryClient()
  
    return useMutation(createCategory, {
      onSuccess: (res) => {
        queryClient.invalidateQueries('category')
      },
      onError: (error) => {
        console.log(error.response.data.message)
      },
    })
  }

  export const useEditCategory = () => {
    const queryClient = useQueryClient()
  
    return useMutation(editCategory, {
      onSuccess: (res) => {
        queryClient.invalidateQueries('category')
      },
      onError: (error) => {
        console.log(error.response.data.message)
      },
    })
  }
  
  export default useGetCategory