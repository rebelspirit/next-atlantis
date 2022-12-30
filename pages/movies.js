import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Movies } from 'api/Movies';
import { map } from 'lodash';
import { ContentCardVertival } from '@components/common/ContentCardVertical/ContentCardVertival';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Pagination } from '@components/common/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { DatabaseRoutes } from "../api/database/DatabaseRoutes";

export default function MoviesPage({ movies }) {
    const isLoading = useLoading();

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook

        return <ShapeLoader/>
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
                    <ContentCardVertival
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
    const movies = await Movies.getMovies(query.page) || await DatabaseRoutes.movies();

    return {
        props: {
            movies,
        }
    };
};

MoviesPage.propTypes = {
    movies: PropTypes.object.isRequired
};


