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