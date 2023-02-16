
export const todosActionType = {
 ADD_TODO: "ADD_TODO",
 DELETE_ALL: "DELETE_ALL",
 DELETE_ITEM: "DELETE_ITEM",
 COMPLETED: "COMPLETED",
 EDIT: "EDIT"
}

const initialState = [
{
 id: 1,
 title: "Hello",
 completed: false
},
{
 id: 2,
 title: "Ice-cream",
 completed: false
}
]

export const todoReducer = (state = initialState, action) => {
switch(action.type){
 case todosActionType.ADD_TODO:
  return[
   ...state, action.payload
  ]
  
 case todosActionType.COMPLETED:
 return state.map((item) => {
  if(item.id === action.payload){
    return { ...item, completed: !item.completed}
  }
  return item
 })

 case todosActionType.DELETE_ITEM:
  const filteredTodo =  state.filter((item) => item.id !== action.payload)
 return filteredTodo

  case todosActionType.DELETE_ALL:
    return []
  default: return state
}

}