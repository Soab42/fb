import { BOOKING, CANCELBOOKING } from "./actionsType";
const initialState = {
  trip: [],
};

const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newbooking = action.payload;
      return {
        ...state,
        trip: [...state.trip, newbooking],
      };

    case CANCELBOOKING:
      const bookingIndex = action.payload;
      return {
        ...state,
        trip: state.trip.filter((booking, index) => index !== bookingIndex),
      };

    default:
      return state;
  }
};

export default flightBookingReducer;
