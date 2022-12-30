import { map, assign, pick } from 'lodash';
import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'api/settings';
import { ObjectUse } from 'lib/ObjectUse';
import { ArrayUse } from 'lib/ArrayUse';

export class Serials {

    static trendsSerialsRequiredFields = [ 'name', 'backdropPath', 'firstAirDate', 'overview' ];

    static serialsExternalIdsFields = [ 'id', 'imdbId', 'twitterId', 'instagramId', 'facebookId' ];

    static getSerials(page = 1, genre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&sort_by=popularity.desc&page=${page}&with_genres=${genre}&vote_count.gte=100&vote_average.gte=1&vote_average.lte=10`)
            .then(response => ({
                ...ObjectUse.camelCaseObjectKeys(response.data),
                results: map(response.data.results, value => ObjectUse.camelCaseObjectKeys(value))
            }))
            .catch(error => console.log(error))
    };

    static getTrendsSerialsOnDay() {
        return axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ArrayUse.collectionHasRequiredFields(response.data.results, this.trendsSerialsRequiredFields))
            .catch(error => console.log(error))
    };

    static getTrendsSerialsOnWeek() {
        return axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ArrayUse.collectionHasRequiredFields(response.data.results, this.trendsSerialsRequiredFields))
            .catch(error => console.log(error))
    };

    static getContentDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(responseTmdb => {
                return axios.get(`https://api.themoviedb.org/3/tv/${responseTmdb.data.id}/external_ids?api_key=${TMDB_API_KEY}&${LANGUAGE}`)
                    .then(responseExternalIds => {
                        return axios.get(`https://videocdn.tv/api/tv-series?api_token=QDH5tZqrotr27szq3U9Yx2lEgunhKbuo&direction=desc&field=global&limit=10&ordering=last_media_accepted&imdb_id=${responseExternalIds.data.imdb_id}`)
                            .then(responseVideoCdn => ({
                                ...ObjectUse.camelCaseObjectKeys(assign(responseVideoCdn.data.data.shift(), responseTmdb.data)),
                                contentType: 'tv' // The default TMDB contentType is 'tv_series', but we use type 'tv' on project
                            }))
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    };

    static getSerialExternalIds(id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${TMDB_API_KEY}`)
            .then(response => pick(ObjectUse.camelCaseObjectKeys(response.data), this.serialsExternalIdsFields))
            .catch(error => console.log(error))
    };

    static getSerialSeasonDetails(id, seasonNumber) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${TMDB_API_KEY}&${LANGUAGE}`)
            .then(response => ({
                ...ObjectUse.camelCaseObjectKeys(response.data),
                episodeCount: response.data.episodes.length
            }))
            .catch(error => console.log(error))
    };

    static getSerialEpisodesDetails(id, seasonNumber, episodeNumber) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${TMDB_API_KEY}&${LANGUAGE}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data))
            .catch(error => console.log(error))
    };
    static getSerialEpisodeImages(id, seasonNumber, episodeNumber) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/images?api_key=${TMDB_API_KEY}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data))
            .catch(error => console.log(error))
    }
}
