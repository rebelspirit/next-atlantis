import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { map } from 'lodash';
import { Serials } from 'Api/Serials';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Pagination } from '@components/UI/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';

export default function SerialsPage({ serials }) {
    const isLoading = useLoading();

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Популярные сериалы'/>

            <div className={styles.contentMappedContainer}>
                {map(serials.results, movie =>
                    <ContentCard
                        key={movie.name}
                        title={movie.name}
                        poster={movie.posterPath}
                        date={movie.firstAirDate}
                    />
                )}
            </div>

            <Pagination
                page={serials.page}
                totalPages={serials.totalPages}
            />
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const serials = await Serials.getSerials(query.page);

    return {
        props: {
            serials,
        }
    };
};

SerialsPage.propTypes = {
    serials: PropTypes.object.isRequired
};

