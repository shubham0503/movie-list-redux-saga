import { takeEvery, put } from 'redux-saga/effects'
import { MOVIE_LIST, SET_MOVIE_LIST } from './constants'
import { API_KEY } from '../constants';

function* getMovies(action) {
  let data
  if (action.searchQuery) {
    data = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.searchQuery}&page=${action.pageNumber}`)
  } else {
    data = yield fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${action.pageNumber}`)
  }
  data = yield data.json()

  yield put({ type: SET_MOVIE_LIST, data: data })
}

function* movieSaga() {
  yield takeEvery(MOVIE_LIST, getMovies)
}

export default movieSaga