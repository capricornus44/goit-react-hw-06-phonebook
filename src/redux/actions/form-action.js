import { FORM_CHANGE, FORM_RESET } from "../constants/form-actionType"

const formInputChange = (event) => ({
  type: FORM_CHANGE,
  payload: event.target.value,
})

const formInputReset = () => ({
  type: FORM_RESET,
  payload: "",
})

export { formInputChange, formInputReset }
