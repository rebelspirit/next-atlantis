import { map, assign } from 'lodash';
import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Movies {
    static getMovies(page = 1, genre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&page=${page}&with_genres=${genre}&vote_count.gte=100&vote_average.gte=1&vote_average.lte=10`)
            .then(response => ({
                ...ObjectUse.camelCaseObjectKeys(response.data),
                results: map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value))
            }))
    }
    static getTrendsMoviesOnDay() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value)))
    }
    static getTrendsMoviesOnWeek() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value)))
    }
    static getContentDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response_db => {
                return axios.get(`https://videocdn.tv/api/movies?api_token=QDH5tZqrotr27szq3U9Yx2lEgunhKbuo&direction=desc&field=global&limit=10&ordering=last_media_accepted&imdb_id=${response_db.data.imdb_id}`)
                    .then(response_cdn => ObjectUse.camelCaseObjectKeys(assign(response_db.data, response_cdn.data.data.shift())))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
}
