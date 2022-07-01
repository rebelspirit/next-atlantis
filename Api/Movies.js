import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';

export class Movies {
    static getMovies(page = 1, genre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&page=${page}&with_genres=${genre}&vote_count.gte=100&vote_average.gte=1&vote_average.lte=10`)
    }
    static getTrendsMoviesOnDay() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
    }
    static getTrendsMoviesOnWeek() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
    }
}
