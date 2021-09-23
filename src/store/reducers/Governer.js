export function GovernerComponents(state = {}, action) {
  switch (action.type) {
    case "EX_CONSERVATIVES":
      return { ...state, exconservatives: action.payload };
    case "LEADERS":
      return { ...state, leaders: action.payload };
    case "APPOINTMENT":
      return { ...state, apointment: action.payload };
    case "APPOINTMENT_TYPES":
      return { ...state, apointmenttypes: action.payload };

    case "APPOINTMENT_DETAILS":
      return { ...state, appointmentDetails: action.payload };

    case "CLEAR_APPOINTMENT_DETAILS":
      return { ...state, appointmentDetails: action.payload };

    default:
      return state;
  }
}
