import { map, assign, pick } from 'lodash';
import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'api/settings';
import { ObjectUse } from 'lib/ObjectUse';
import { ArrayUse } from 'lib/ArrayUse';

export class Movies {

    static trendsMoviesRequiredFields = [ 'title', 'backdropPath', 'releaseDate', 'overview' ];

    static moviesExternalIdsFields = ['id', 'imdbId', 'twitterId', 'instagramId', 'facebookId' ];

    static getMovies(page = 1, genre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&page=${page}&with_genres=${genre}&vote_count.gte=100&vote_average.gte=1&vote_average.lte=10`)
            .then(response => ({
                ...ObjectUse.camelCaseObjectKeys(response.data),
                results: map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value))
            }))
            .catch(error => console.log(error))
    };

    static getTrendsMoviesOnDay() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ArrayUse.collectionHasRequiredFields(response.data.results, this.trendsMoviesRequiredFields))
            .catch(error => console.log(error))
    };

    static getTrendsMoviesOnWeek() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ArrayUse.collectionHasRequiredFields(response.data.results, this.trendsMoviesRequiredFields))
            .catch(error => console.log(error))
    };

    static getContentDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(responseTmdb => {
                return axios.get(`https://videocdn.tv/api/movies?api_token=QDH5tZqrotr27szq3U9Yx2lEgunhKbuo&direction=desc&field=global&limit=10&ordering=last_media_accepted&imdb_id=${responseTmdb.data.imdb_id}`)
                    .then(responseVideoCdn => ObjectUse.camelCaseObjectKeys(assign(responseVideoCdn.data.data.shift(), responseTmdb.data)))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    };

    static getMovieExternalIds(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${TMDB_API_KEY}`)
            .then(response => pick(ObjectUse.camelCaseObjectKeys(response.data), this.moviesExternalIdsFields))
            .catch(error => console.log(error))
    };
}
