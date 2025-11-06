export const intialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
export function formReducer(state, action) {
  console.log(state,action)
  switch (action.type) {
    case "update_field":
      return { ...state, [action.field]: action.value };
    case "next_step":
      return { ...state, step: state.step + 1 };
    case "prev_step":
      return { ...state, step: state.step - 1 };
    case "reset_form":
      return intialState;
    default:
      return state;
  }
}
