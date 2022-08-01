import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { map } from 'lodash';
import { Serials } from 'Api/Serials';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Pagination } from '@components/UI/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/UI/ShapeLoader/ShapeLoader';

export default function SerialsPage({ serials }) {
    const isLoading = useLoading();

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook

        return <SapeLoader/>
        // return (
        //     <div className={styles.contentPageContainer}>
        //         <SectionTitle title='Популярные сериалы'/>
        //
        //         <div className={styles.contentMappedContainer}>
        //             {map(new Array(20), _ => <CustomContentLoader/>)}
        //         </div>
        //     </div>
        // )
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Популярные сериалы'/>

            <div className={styles.contentMappedContainer}>
                {map(serials.results, serial =>
                    <ContentCard
                        key={serial.id}
                        id={serial.id}
                        mediaType='tv'
                        title={serial.name}
                        poster={serial.posterPath}
                        date={serial.firstAirDate}
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

