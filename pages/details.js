import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { Movies } from 'Api/Movies';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/UI/ShapeLoader/ShapeLoader';
import { useEffect } from 'react';

export default function DetailsPage({ details }) {
    const isLoading = useLoading('/details');

    useEffect(() =>{
        console.log('details', details);
    }, [details])

    if (isLoading) {
        return <SapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            h1
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const details = await Movies.getContentDetails(query.id);

    return {
        props: {
            details,
        }
    };
};

DetailsPage.propTypes = {
    details: PropTypes.object.isRequired
};
