import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { Movies } from 'Api/Movies';
import { Serials } from 'Api/Serials';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/UI/ShapeLoader/ShapeLoader';
import { useEffect } from 'react';
import Image from 'next/image';

export default function WatchPage({ details }) {
    const isLoading = useLoading('/details');

    useEffect(() =>{
        console.log('details', details);
    }, [details])

    if (isLoading) {
        return <SapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <div className={styles.contentDetailsContainer}>
                <Image
                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.backdropPath}`}
                    alt='slider_poster'
                    width={1600}
                    height={500}
                    className={styles.backdropPathImg}
                    unoptimized
                />
                {/*<div className={styles.detailsContainer}>*/}
                {/*    <Image*/}
                {/*        src={`https://image.tmdb.org/t/p/w780${details.posterPath}`}*/}
                {/*        alt='content_card'*/}
                {/*        width={240}*/}
                {/*        height={390}*/}
                {/*        className={styles.contentCardImg}*/}
                {/*        unoptimized*/}
                {/*        loading='lazy'*/}
                {/*    />*/}
                {/*</div>*/}
            </div>

            {/*<iframe*/}
            {/*    width={700}*/}
            {/*    height={400}*/}
            {/*    title='movie'*/}
            {/*    allowFullScreen*/}
            {/*    scrolling="no"*/}
            {/*    src={details.iframeSrc}*/}
            {/*/>*/}

        </div>
    )
}

export const getServerSideProps = async ({ query }) => {

    const mediaTypes = {
        movie: id => Movies.getContentDetails(id),
        tv: id => Serials.getContentDetails(id)
    };

    const details = await mediaTypes[query.type](query.id);

    return {
        props: {
            details,
        }
    };
};

WatchPage.propTypes = {
    details: PropTypes.object.isRequired
};
