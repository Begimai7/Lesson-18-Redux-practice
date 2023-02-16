import { useState } from "react"

export const useInput = () => {
const [value, setValue] = useState("")

const getInputValue = (e) => {
 setValue(e.target.value)
}
const emptyInput = () => {
 setValue("")
}
 return{
 value,
 getInputValue,
 emptyInput
 }
}