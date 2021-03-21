import React from 'react';
import './App.css';
import Main from './components/Main';
import Liked from './components/Liked';
import Archive from './components/Archive';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllNews,
  deleteFromMainNews,
  addToArchiveNews,
  deleteFromArchiveNews,
  addToMainNews,
  addToLikeNews,
  deleteFromLikeNews,
} from './asyncAction/asyncPosts';

function App() {
  const [modalClass, setModalClass] = useState('hide');
  const [modalMessage, setModalMessage] = useState('');
  const dispatch = useDispatch();
  const mainNews = useSelector((state) => state.Mainreducer);
  const archiveNews = useSelector((state) => state.Archivereducer);
  const likeNews = useSelector((state) => state.Likereducer);

  // фу-ия для всплывающего уведомления
  function showMessage(textMessage) {
    setModalClass('modal');
    setModalMessage(textMessage);
    setTimeout(() => {
      setModalClass('hide');
      setModalMessage('');
    }, 1000);
  }

  // достаем все новости при инициализации
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  // перемещаем новость из основных в архив + если новость пролайкана, удаляем из избранных
  const moveFromMainToArchive = (item) => {
    dispatch(deleteFromMainNews(item));
    dispatch(addToArchiveNews(item));

    if (likeNews.filter((el) => el.id === item.id).length > 0) {
      dispatch(deleteFromLikeNews(item));
    }
    showMessage('новость перемещена в архив');
  };

  // возвращаем новость из архива в основные
  const returnFromArchiveToMain = (item) => {
    dispatch(deleteFromArchiveNews(item));
    dispatch(addToMainNews(item));
    showMessage('новость перемещена на главную вкладку');
  };

  // удаляем новость из основных + если новость пролайкана, удаляем из избранных
  const deleteFromMain = (item) => {
    dispatch(deleteFromMainNews(item));

    if (likeNews.filter((el) => el.id === item.id).length > 0) {
      dispatch(deleteFromLikeNews(item));
    }
    showMessage('новость удалена');
  };

  // удаляем новость из архива
  const deleteFromArchive = (item) => {
    dispatch(deleteFromArchiveNews(item));
    showMessage('новость удалена');
  };

  // переключаем лайк
  const toggleLike = (item) => {
    if (likeNews.filter((el) => el.id === item.id).length > 0) {
      dispatch(deleteFromLikeNews(item));
    } else {
      dispatch(addToLikeNews(item));
    }
  };

  return (
    <div className="wrap">
      <div className={modalClass}>{modalMessage}</div>
      <div className="nav-wrap">
        <Navbar />
      </div>
      <div className="app-wrap">
        <Route
          exact
          path="/"
          render={() => (
            <Main
              likeNews={likeNews}
              toggleLike={toggleLike}
              deleteFromMain={deleteFromMain}
              moveFromMainToArchive={moveFromMainToArchive}
              mainNews={mainNews}
            />
          )}></Route>
        <Route path="/liked" render={() => <Liked likeNews={likeNews} />}></Route>
        <Route
          path="/archive"
          render={() => (
            <Archive
              deleteFromArchive={deleteFromArchive}
              returnFromArchiveToMain={returnFromArchiveToMain}
              archiveNews={archiveNews}
            />
          )}></Route>
      </div>
    </div>
  );
}

export default App;
