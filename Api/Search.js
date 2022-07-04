import { reduce } from 'lodash';
import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Search {
    static getSearchedContent(query) {
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&query=${query}`)
            .then(response => reduce(ObjectUse.camelCaseObjectKeys(response.data.results), (result, value) => {
                result[value.mediaType] = [ ...result[value.mediaType], value]
                return result;
            }, { movie: [], tv: [], person: [] }))
    }
}
