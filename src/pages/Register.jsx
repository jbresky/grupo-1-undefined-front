import React from 'react'
import Header from '../Components/Layout/Header'
import ContainerForm from '../Components/RegisterForm/Container'
import Footer from '../Components/Layout/Footer'

const Register = ({action}) => {
  return (
    <div>
        <Header/>
        <ContainerForm action={action}/>
        <Footer/>
    </div>
  )
}

export default Register