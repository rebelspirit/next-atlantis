const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
    },
    images: {
        domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
    },
}
