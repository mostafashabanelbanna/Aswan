export function formsComponents(state = {}, action) {
  switch (action.type) {
    case "BUSINESS_FIELDS":
      return { ...state, businessFields: action.payload };
    default:
      return state;
  }
}
