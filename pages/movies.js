import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Movies } from 'Api/Movies';
import { map } from 'lodash';
import { ContentCard } from '@components/common/ContentCard/ContentCard';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Pagination } from '@components/common/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/common/ShapeLoader/ShapeLoader';

export default function MoviesPage({ movies }) {
    const isLoading = useLoading();

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook

        return <SapeLoader/>
        // return (
        //     <div className={styles.contentPageContainer}>
        //
        //         <SectionTitle title='Популярные фильмы'/>
        //
        //         <div className={styles.contentMappedContainer}>
        //             {map(new Array(20), _ => <CustomContentLoader/>)}
        //         </div>
        //     </div>
        // )
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Популярные фильмы'/>

            <div className={styles.contentMappedContainer}>
                {map(movies.results, movie =>
                    <ContentCard
                        key={movie.id}
                        id={movie.id}
                        mediaType='movie'
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

