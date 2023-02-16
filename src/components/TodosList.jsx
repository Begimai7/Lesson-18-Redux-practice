import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { completedTodo, deletedTodo } from '../store/actions'

export const TodosList = () => {
 const todos = useSelector((state) => state.todo)
 console.log("todos" , todos);
const dispatch = useDispatch()

  return (
    <TodoList>
    {
      todos.map((item)=> (
       
        <TodoItems key={item.id}>
          <Id>{item.id}</Id>
          <p  style={{ color: item.completed ? 'gray' : "",
        textDecoration: item.completed ? "line-through" : "" }}>{item.title}</p>
          <div>
          <CompletedBtn onClick={() => dispatch(completedTodo(item.id))}>Completed</CompletedBtn>

          <DeletedBtn onClick={() => dispatch(deletedTodo(item.id))}>Delete</DeletedBtn>

          </div>
        
        </TodoItems>
      ))
    }
    </TodoList>
  )
}
const Id = styled.span`
 background-color: #e2d8d8; 
 margin-right: 10px;
 border-radius: 20px;
 padding: 2px;
`
const TodoList = styled.ul`
 list-style: none;
 width: 550px;
 margin: 2rem auto;

 p{
  font-weight: bold;
 }
`
const TodoItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  padding-left: 20px;
`

const CompletedBtn = styled.button`
  padding: 10px 20px;
 border-radius: 30px;
 border: none;
 color: #fff;
 background-color: #058096;
 margin: 10px;
 cursor: pointer;

 :hover{
  background-color: #0593ac;
 }
`
const DeletedBtn = styled.button`
   padding: 10px 20px;
 border-radius: 30px;
 border: none;
 color: #fff;
 background-color: #801300;
 margin: 10px;
 cursor: pointer;

 :hover{
  background-color: #9c3708;
 }
`
// const EditdBtn = styled.button`
//    padding: 10px 40px;
//  border-radius: 30px;
//  border: none;
//  color: #fff;
//  font-size: 20px;
//  background-color: green;
//  margin: 10px;
//  cursor: pointer;

//  :hover{
//   background-color: #087408;
//  }
// `