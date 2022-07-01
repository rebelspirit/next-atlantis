import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Serials } from 'Api/Serials';
import { map } from 'lodash';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Pagination } from '@components/UI/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';

export default function SerialsPage({ serials }) {
    //console.log(serials);
    const isLoading = useLoading();

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.moviesPageContainer}>
            <SectionTitle title='Популярные сериалы'/>

            <div className={styles.popularMoviesContainer}>
                {map(serials.results, movie =>
                    <ContentCard
                        key={movie.name}
                        title={movie.name}
                        poster={movie.poster_path}
                        date={movie.first_air_date}
                    />
                )}
            </div>

            <Pagination
                page={serials.page}
                totalPages={serials.total_pages}
            />
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const serials = await Serials.getSerials(query.page);

    return {
        props: {
            serials: serials.data,
        }
    };
};

SerialsPage.propTypes = {
    serials: PropTypes.object.isRequired
};

