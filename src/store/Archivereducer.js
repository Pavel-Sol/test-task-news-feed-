const defaultState = [];

const LOADING_ARCHIVE_NEWS = 'LOADING_ARCHIVE_NEWS';
const ADD_ARCHIVE_NEWS = 'ADD_ARCHIVE_NEWS';
const DELETE_ARCHIVE_NEWS = 'DELETE_ARCHIVE_NEWS';
export const Archivereducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_ARCHIVE_NEWS:
      return [...state, ...action.payload];

    case ADD_ARCHIVE_NEWS:
      return [...state, action.payload];

    case DELETE_ARCHIVE_NEWS:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export const loadingArchiveNews = (payload) => {
  return {
    type: LOADING_ARCHIVE_NEWS,
    payload,
  };
};

export const addArchiveNews = (payload) => {
  return {
    type: ADD_ARCHIVE_NEWS,
    payload,
  };
};

export const deleteArchiveNews = (payload) => {
  return {
    type: DELETE_ARCHIVE_NEWS,
    payload,
  };
};
