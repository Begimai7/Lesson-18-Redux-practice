import React from 'react'
import styled from 'styled-components'
import { TodosForm } from '../components/TodosForm'
import { TodosList } from '../components/TodosList'

export const TodosPage = () => {
  return (
    <Todos>
     <TodosForm />
     <TodosList />
    </Todos>
  )
}
const Todos = styled.div`
 background-color: rgba(0, 0, 0, 0.75);
 width: 700px;
 margin: 1rem auto;
 padding: 20px;
 border-radius: 10px;
`
