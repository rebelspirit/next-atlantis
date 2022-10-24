import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';
import { map, slice } from 'lodash';
import { ArrayUse } from 'lib/ArrayUse';

export class Common {
    static relatedContentRequiredFields = {
        movie: [ 'title', 'backdropPath', 'releaseDate', 'overview' ],
        tv: [ 'name', 'backdropPath', 'firstAirDate', 'overview' ],
    };

    static actorsStuffRequiredFields = [ 'name', 'profilePath', 'character', 'knownForDepartment' ];

    static getActorsStuff(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => slice(ArrayUse.collectionHasRequiredFields(response.data.cast, this.actorsStuffRequiredFields),0, 9))
            .catch(error => console.log(error))
    };

    static getRelatedContent(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => slice(ArrayUse.collectionHasRequiredFields(response.data.results, this.relatedContentRequiredFields[type]), 0, 6))
            .catch(error => console.log(error))
    };

    static getCollection(id) {
        return axios.get(`https://api.themoviedb.org/3/collection/${id}?api_key=${TMDB_API_KEY}&${LANGUAGE}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data))
            .catch(error => console.log(error))
    };

    static getLanguages() {
        return axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${TMDB_API_KEY}`)
            .then(response => map(response.data, lang => ObjectUse.camelCaseObjectKeys(lang)))
            .catch(error => console.log(error))
    };

    static getCountries() {
        return axios.get(`https://api.themoviedb.org/3/configuration/countries?api_key=${TMDB_API_KEY}&${LANGUAGE}`)
            .then(response => map(response.data, country => ObjectUse.camelCaseObjectKeys(country)))
            .catch(error => console.log(error))
    };

}
