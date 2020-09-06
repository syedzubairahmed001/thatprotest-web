import * as actionTypes from "../actionTypes/index";

export const setAuthModalToggle = (open) => {
  return {
    type: actionTypes.SET__AUTH_MODAL_TOGGLE,
    data: { open },
  };
};
export const setAuthModal = (data) => {
  return {
    type: actionTypes.SET__AUTH_MODAL,
    data: data,
  };
};
