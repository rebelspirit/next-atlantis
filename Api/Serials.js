import { map } from 'lodash';
import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Serials {
    static getSerials(page = 1, genre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&page=${page}&with_genres=${genre}&vote_count.gte=100&vote_average.gte=1&vote_average.lte=10`)
            .then(response => ({
                ...ObjectUse.camelCaseObjectKeys(response.data),
                results: map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value))
            }))
    }
    static getTrendsSerialsOnDay() {
        return axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value)))
    }
    static getTrendsSerialsOnWeek() {
        return axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value)))
    }
}
