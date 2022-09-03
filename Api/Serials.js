import { map, assign } from 'lodash';
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
    static getContentDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response_db => {
                return axios.get(`https://api.themoviedb.org/3/tv/${response_db.data.id}/external_ids?api_key=${TMDB_API_KEY}&language=en-US`)
                    .then(response_db_external => {
                        return axios.get(`https://videocdn.tv/api/tv-series?api_token=QDH5tZqrotr27szq3U9Yx2lEgunhKbuo&direction=desc&field=global&limit=10&ordering=last_media_accepted&imdb_id=${response_db_external.data.imdb_id}`)
                            .then(response_cdn => ObjectUse.camelCaseObjectKeys(assign(response_db.data, response_db_external.data, response_cdn.data.data.shift())))
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    static getSerialExternalIds(id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${TMDB_API_KEY}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data))
            .catch(error => console.log(error))
    }
}
