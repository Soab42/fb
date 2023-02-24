import { BOOKING, CANCELBOOKING } from "./actionsType";

export const booktrip = (value) => {
  return {
    type: BOOKING,
    payload: value,
  };
};

export const canceltrip = (value) => {
  return {
    type: CANCELBOOKING,
    payload: value,
  };
};
