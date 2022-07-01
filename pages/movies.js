import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Movies } from 'Api/Movies';
import { map } from 'lodash';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Pagination } from '@components/UI/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';

export default function MoviesPage({ movies }) {
    const isLoading = useLoading();

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Популярные фильмы'/>

            <div className={styles.contentMappedContainer}>
                {map(movies.results, movie =>
                    <ContentCard
                        key={movie.title}
                        title={movie.title}
                        poster={movie.poster_path}
                        date={movie.release_date}
                    />
                )}
            </div>

            <Pagination
                page={movies.page}
                totalPages={movies.total_pages}
            />
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    console.log(query);
    const movies = await Movies.getMovies(query.page);

    return {
        props: {
            movies: movies.data,
        }
    };
};

MoviesPage.propTypes = {
    movies: PropTypes.object.isRequired
};

