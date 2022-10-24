import axios from 'axios';
import { reduce, map, compact } from 'lodash';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Search {
    static searchedContentRequiredFields = {
        movie: [ 'title', 'posterPath', 'releaseDate' ],
        tv: [ 'name', 'posterPath', 'firstAirDate' ],
        person: [ 'name', 'profilePath', 'knownForDepartment' ]
    };

    static getSearchedContent(query) {
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}&query=${query}`)
            .then(response => reduce(ObjectUse.camelCaseObjectKeys(response.data.results), (result, value) => {
                const contentValidation = compact(map(this.searchedContentRequiredFields[value.mediaType], field => {
                    return !!value[field];
                }))

                const isContentHasEmptyFields = this.searchedContentRequiredFields[value.mediaType].length > contentValidation.length

                if (isContentHasEmptyFields) {
                    return result;
                }

                result[value.mediaType] = [ ...result[value.mediaType], value];

                return result;
            }, { movie: [], tv: [], person: [] }));
    };
}
