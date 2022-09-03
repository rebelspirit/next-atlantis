import axios from 'axios';
import { TMDB_API_KEY, LANGUAGE, REGION } from 'Api/settings';
import { ObjectUse } from 'lib/ObjectUse';

export class Common {
    static getActorsStuff(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data.cast.slice(0, 9)))
    }
    static getRelatedContent(type, id) {
        return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${TMDB_API_KEY}&${LANGUAGE}&${REGION}`)
            .then(response => ObjectUse.camelCaseObjectKeys(response.data.results.slice(0, 6)))
    }
    static getTest(type, id) {
        return axios.get(`https://api.themoviedb.org/3/find/tt1745960?api_key=37381515063aba22627eb415da0adfe3&language=en-US&external_source=imdb_id`)
            .then(response => response.data.results)
    }
}
