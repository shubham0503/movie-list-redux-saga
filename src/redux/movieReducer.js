import { SET_MOVIE_LIST } from './constants'

export const movieData = (data = [], action) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return {...action.data}
    default:
      return data
  }
}