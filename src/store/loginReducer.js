
export const authActionsTypes = {
 LOG_IN: "LOG_IN",
 LOG_OUT: "LOG_OUT"
}
const initialState = {
 email: "",
 isAuthorized: false
}

export const loginReducer = (state = initialState, action) => {
 switch(action.type){
  case authActionsTypes.LOG_IN:
   return{
    ...state,
    email: action.payload,
    isAuthorized: true
   }

  case authActionsTypes.LOG_OUT:
   return initialState

   default: return state
 }

}