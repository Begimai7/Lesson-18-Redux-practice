import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { authActionsTypes } from '../store/loginReducer'

export const Header = () => {
const isAuthorized = useSelector((state) => state.auth.isAuthorized)
 const dispatch = useDispatch()

  return (
   <HeaderContainer>
     <p>TodoList</p>
      {
     isAuthorized && <Button onClick={() => dispatch({ type: authActionsTypes.LOG_OUT})}>Logout</Button>
      }   
   </HeaderContainer>
    
  )
}

const HeaderContainer = styled.header`
 padding: 20px;
 background-color: #161616;
 color: #fff;
 display: flex;
 justify-content: space-around;
 align-items: center;
 p{
  font-weight: bold;
  font-size: 25px;
 }
`
const Button = styled.button`
 
 padding: 10px 25px;
 border-radius: 10px;
 border: none;
 background-color: #4e4ef8;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
`