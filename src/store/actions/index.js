import { todosActionType } from "../todosReducer"


export const deletedTodo = (payload) => {
 return ({ type: todosActionType.DELETE_ITEM, payload})
}
export const completedTodo = (payload) => {
 return ({ type: todosActionType.COMPLETED, payload})
}