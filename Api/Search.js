import axios from 'axios';
import { reduce, map, compact } from 'lodash';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Search {
    static searchedContentFilterRules = {
        movie: [ 'title', 'posterPath' ],
        tv: [ 'name', 'posterPath' ],
        person: [ 'name', 'profilePath' ]
    }

    static getSearchedContent(query) {
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&query=${query}`)
            .then(response => reduce(ObjectUse.camelCaseObjectKeys(response.data.results), (result, value) => {
                const contentValidation = compact(map(this.searchedContentFilterRules[value.mediaType], field => {
                    return !!value[field];
                }))

                const isContentHasEmptyFields = this.searchedContentFilterRules[value.mediaType].length > contentValidation.length

                if (isContentHasEmptyFields) {
                    return result;
                }

                result[value.mediaType] = [ ...result[value.mediaType], value];

                return result;
            }, { movie: [], tv: [], person: [] }));
    }
}
