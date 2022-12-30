import axios from "axios";

export class DatabaseRoutes {

    static movies() {
        return axios.get('http://localhost:8080/movies')
            .then(response => response.data)
            .catch(error => console.log(error))
    };

    static trendsMovies() {
        return axios.get('http://localhost:8080/movies')
            .then(response => response.data.results)
            .catch(error => console.log(error))
    };

    static serials() {
        return axios.get('http://localhost:8080/serials')
            .then(response => response.data)
            .catch(error => console.log(error))
    };

    static trendsSerials() {
        return axios.get('http://localhost:8080/serials')
            .then(response => response.data.results)
            .catch(error => console.log(error))
    };
}