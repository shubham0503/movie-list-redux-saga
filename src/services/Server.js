import Axios from 'axios'

const Server = Axios.create({
  baseURL: 'https://api.themoviedb.org/'
})

export default Server
