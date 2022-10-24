import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { map } from 'lodash';
import { ContentCard } from '@components/common/ContentCard/ContentCard';
import { Movies } from 'Api/Movies';
import PropTypes from 'prop-types';
import MoviesPage from 'pages/movies';
import { Common } from 'Api/Common';
import { useEffect } from 'react';

export default function CollectionPage({ collection }) {
    const isLoading = useLoading();

    useEffect(() => {
        console.log('collection', collection);
    }, [collection])

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
            <SectionTitle title={collection.name}/>

            <div className={styles.contentMappedContainer}>
                {map(collection.parts, movie =>
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
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {
    const collection = await Common.getCollection(query.id);

    return {
        props: {
            collection,
        }
    };
};

MoviesPage.propTypes = {
    collection: PropTypes.object.isRequired
};
