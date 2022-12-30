import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { map } from 'lodash';
import { Serials } from 'api/Serials';
import { ContentCardVertival } from '@components/common/ContentCardVertical/ContentCardVertival';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Pagination } from '@components/common/Pagination/Pagination';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { DatabaseRoutes } from "../api/database/DatabaseRoutes";

export default function SerialsPage({ serials }) {
    const isLoading = useLoading();

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook

        return <ShapeLoader/>
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
                    <ContentCardVertival
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
    const serials = await Serials.getSerials(query.page) || await DatabaseRoutes.serials();

    return {
        props: {
            serials,
        }
    };
};

SerialsPage.propTypes = {
    serials: PropTypes.object.isRequired
};

