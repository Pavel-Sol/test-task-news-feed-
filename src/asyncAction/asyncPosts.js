import { loadingMainNews, deleteMainNews, addMainNews } from '../store/Mainreducer';
import { loadingArchiveNews, addArchiveNews, deleteArchiveNews } from '../store/Archivereducer';
import { loadingLikeNews, addLikeNews, deleteLikeNews } from '../store/Likereducer';

export const getAllNews = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/db')
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadingMainNews(json.mainNews));
        dispatch(loadingArchiveNews(json.archivedNews));
        dispatch(loadingLikeNews(json.likedNews));
      });
  };
};

export const addToLikeNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/likedNews', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then(() => dispatch(addLikeNews(item)));
  };
};

export const deleteFromLikeNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/likedNews/' + item.id, {
      method: 'DELETE',
    }).then((json) => dispatch(deleteLikeNews(item)));
  };
};

export const deleteFromMainNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/mainNews/' + item.id, {
      method: 'DELETE',
    }).then((json) => dispatch(deleteMainNews(item)));
  };
};

export const deleteFromArchiveNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/archivedNews/' + item.id, {
      method: 'DELETE',
    }).then((json) => dispatch(deleteArchiveNews(item)));
  };
};

export const addToArchiveNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/archivedNews', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then(() => dispatch(addArchiveNews(item)));
  };
};

export const addToMainNews = (item) => {
  return (dispatch) => {
    fetch('http://localhost:3001/mainNews', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then(() => dispatch(addMainNews(item)));
  };
};
