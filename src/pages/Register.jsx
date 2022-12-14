import React from 'react'
import Header from '../Components/Layout/Header'
import RegisterForm from '../Components/RegisterForm/RegisterForm'

const Register = ({action}) => {
  return (
    <div>
        <Header/>
        {/* <ContainerForm action={action}/> */}
        <RegisterForm/>
    </div>
  )
}

export default Register