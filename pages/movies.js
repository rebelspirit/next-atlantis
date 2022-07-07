import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Movies } from 'Api/Movies';
import { map } from 'lodash';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Pagination } from '@components/UI/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';
import { CustomContentLoader } from '@components/UI/ContentLoaders/ContentCardLoader';

export default function MoviesPage({ movies }) {
    const isLoading = useLoading('/movies');

    if (isLoading) {
        return (
            <div className={styles.contentPageContainer}>
                <SectionTitle title='Популярные фильмы'/>

                <div className={styles.contentMappedContainer}>
                    {map(new Array(20), _ => <CustomContentLoader/>)}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Популярные фильмы'/>

            <div className={styles.contentMappedContainer}>
                {map(movies.results, movie =>
                    <ContentCard
                        key={movie.title}
                        title={movie.title}
                        poster={movie.posterPath}
                        date={movie.releaseDate}
                    />
                )}
            </div>

            <Pagination
                page={movies.page}
                totalPages={movies.totalPages}
            />
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const movies = await Movies.getMovies(query.page);

    return {
        props: {
            movies,
        }
    };
};

MoviesPage.propTypes = {
    movies: PropTypes.object.isRequired
};

