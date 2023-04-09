import {MOVIE_LIST} from './constants'

export const fetchMovieList = (pageNumber = 1, searchQuery = '') => {
  return {
    type: MOVIE_LIST,
    pageNumber,
    searchQuery
  }
}