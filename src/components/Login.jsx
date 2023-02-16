import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authActionsTypes } from '../store/loginReducer'

export const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()

  const inputChangeHandler = (name) => {
   return(event) => {
    setLogin(prevS => ({ ...prevS, [name]: event.target.value}))
   }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(
      login.email === "test@gmail.com" && login.password === "123"
    ){
      dispatch({ type: authActionsTypes.LOG_IN, payload: login.email})
    }
  }
 
  return (
    <LoginContainer onSubmit={submitHandler}>
      <h2>Sign in</h2>
     <Input 
       type="email"
       placeholder='email'
       value={login.email}
       onChange={inputChangeHandler("email")}
       
        />
     <Input 
       type="password" 
       placeholder='password'
       value={login.password}
       onChange={inputChangeHandler("password")}
   
       />
       <Button onClick={inputChangeHandler}>Login</Button>
    </LoginContainer>
  )
}

const LoginContainer = styled.form`
  width: 500px;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  margin: 8rem auto;
`
const Input = styled.input`
 padding: 8px;
 outline: none;
 border-radius: 20px;
 border: 1px solid gray;
 margin: 10px;
 width: 80%
`
const Button = styled.button`
 padding: 10px 40px;
 border-radius: 30px;
 border: none;
 color: #fff;
 font-size: 20px;
 background-color: green;
 margin: 10px;
 cursor: pointer;

 :hover{
  background-color: #087408;
 }
`