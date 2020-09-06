import * as actionTypes from "../actionTypes";

const initialState = {
  auth: {
    modalTitle: "Sign up",
    modalDescription: "Sign up to create a protest",
    modalOpen: false,
    isLogin: false,
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  const { data } = action || {};
  switch (action.type) {
    case actionTypes.SET__LOGIN:
      return {
        ...state,
        auth: {
          ...state.auth,
          isLogin: true,
        },
      };
    case actionTypes.SET__AUTH_MODAL_TOGGLE:
      return {
        ...state,
        auth: {
          ...state.auth,
          modalOpen: data.open,
        },
      };
    case actionTypes.SET__AUTH_MODAL:
      return {
        ...state,
        auth: {
          ...state.auth,
          modalOpen: data.modalOpen,
          modalTitle: data.modalTitle,
          modalDescription: data.modalDescription,
          isLogin: data.isLogin,
        },
      };

    default:
      return state;
  }
};

export default reducer;
