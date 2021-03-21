const defaultState = [];

const LOADING_LIKE_NEWS = 'LOADING_LIKE_NEWS';
const ADD_LIKE_NEWS = 'ADD_LIKE_NEWS';
const DELETE_LIKE_NEWS = 'DELETE_LIKE_NEWS';

export const Likereducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_LIKE_NEWS:
      return [...state, ...action.payload];

    case DELETE_LIKE_NEWS:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    case ADD_LIKE_NEWS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const loadingLikeNews = (payload) => {
  return {
    type: LOADING_LIKE_NEWS,
    payload,
  };
};

export const addLikeNews = (payload) => {
  return {
    type: ADD_LIKE_NEWS,
    payload,
  };
};

export const deleteLikeNews = (payload) => {
  return {
    type: DELETE_LIKE_NEWS,
    payload,
  };
};
