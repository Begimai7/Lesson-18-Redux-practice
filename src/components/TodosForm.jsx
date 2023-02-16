import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput'
import { todosActionType } from '../store/todosReducer'

export const TodosForm = () => {
const {value, getInputValue, emptyInput} = useInput()
const dispatch = useDispatch()

const submitTodo = (e) => {
  e.preventDefault()
  const todosObj = {
    id: Math.random().toString(),
    title: value,
    completed: false
  }
  dispatch({ type: todosActionType.ADD_TODO, payload: todosObj})
  emptyInput()
}

const deleteAllTodo = () => {
  dispatch({ type: todosActionType.DELETE_ALL})
}

  return (
    <TodoFormContainer onSubmit={submitTodo}>
      <Input 
        type="text" 
        placeholder='Add your todos...'
        value={value}
        onChange={getInputValue}
        />
      <Button>ADD</Button>
      <ButtonDelete onClick={deleteAllTodo}>Delete All</ButtonDelete>  
    </TodoFormContainer>
  )
}
const TodoFormContainer = styled.form`
 margin-top: 2rem;
`
const Button = styled.button`
 padding: 10px 30px;
 border-radius: 30px;
 border: none;
 color: #fff;
 font-size: 20px;
 background-color: #008075;
 margin: 10px;
 cursor: pointer;

 :hover{
  background-color: #0a7269;
 }
 `
const ButtonDelete = styled.button`
 padding: 10px 30px;
 border-radius: 30px;
 border: none;
 color: #fff;
 font-size: 20px;
 background-color: #cf1212;
 margin: 10px;
 cursor: pointer;

 :hover{
  background-color: #c00b0b;
 }
 `

const Input = styled.input`
 padding: 20px;
 border-radius: 20px;
 outline: none;
 border: 1px solid gray;
 width: 300px;
 `
