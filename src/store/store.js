import { combineReducers, createStore } from "redux";
import { loginReducer } from "./loginReducer";
import { todoReducer } from "./todosReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: loginReducer
})


export const store = createStore(rootReducer)

store.subscribe(() => {
  console.log("Store Changed", store.getState());
})