import axios from 'axios';

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',

})

export const genreApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/genre/movie/',

})

export const searchApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/',

})

export const personApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/person/'

})

export const collectionApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/collection/'
})

