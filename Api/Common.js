import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';
import { compact, filter, map, slice, eq } from 'lodash';

export class Common {
    static relatedContentRequiredFields = {
        movie: [ 'title', 'backdropPath', 'releaseDate', 'overview' ],
        tv: [ 'name', 'backdropPath', 'firstAirDate', 'overview' ],
    };

    static actorsStuffRequiredFields = [ 'name', 'profilePath', 'character', 'knownForDepartment' ];

    static getActorsStuff(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => {
                return slice(filter(ObjectUse.camelCaseObjectKeys(response.data.cast), person => {
                    const actorsStuffFieldsValidation = compact(map(this.actorsStuffRequiredFields, field => {
                        return person[field] ? person[field] : null
                    }));

                    if (eq(actorsStuffFieldsValidation.length, this.actorsStuffRequiredFields.length)) {
                        return person
                    }
                }), 0, 9)
            })
    };

    static getRelatedContent(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => {
                return slice(filter(ObjectUse.camelCaseObjectKeys(response.data.results), content => {
                    const relatedContentFieldsValidation = compact(map(this.relatedContentRequiredFields[content.mediaType], field => {
                        return content[field] ? content[field] : null
                    }));

                    if (eq(relatedContentFieldsValidation.length, this.relatedContentRequiredFields[content.mediaType].length)) {
                        return content
                    }
                }), 0, 6)
            })
    };
}
