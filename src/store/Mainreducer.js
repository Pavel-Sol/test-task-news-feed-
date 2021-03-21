const defaultState = [];

const LOADING_MAIN_NEWS = 'LOADING_MAIN_NEWS';
const DELETE_MAIN_NEWS = 'DELETE_MAIN_NEWS';
const ADD_MAIN_NEWS = 'ADD_MAIN_NEWS';

export const Mainreducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_MAIN_NEWS:
      return [...state, ...action.payload];

    case DELETE_MAIN_NEWS:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    case ADD_MAIN_NEWS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const loadingMainNews = (payload) => {
  return {
    type: LOADING_MAIN_NEWS,
    payload,
  };
};

export const deleteMainNews = (payload) => {
  return {
    type: DELETE_MAIN_NEWS,
    payload,
  };
};

export const addMainNews = (payload) => {
  return {
    type: ADD_MAIN_NEWS,
    payload,
  };
};
