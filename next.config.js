const path = require('path');
// const withImages = require('next-images');
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
    },
    images: {
        domain: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
    },
}
