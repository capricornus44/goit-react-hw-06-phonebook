import { FORM_CHANGE, FORM_RESET } from "../constants/form-actionType"

const initialState = ""

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FORM_CHANGE:
      return payload

    case FORM_RESET:
      return payload

    default:
      return state
  }
}
