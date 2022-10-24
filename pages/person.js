import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Common } from 'Api/Common';
import Image from 'next/image';

export default function PersonPage({ personDetails, personCombinedCredits }) {
    const isLoading = useLoading();

    useEffect(() => {
        console.log('personDetails', personDetails);
        console.log('personCombinedCredits', personCombinedCredits);
    }, [personDetails, personCombinedCredits])

    if (isLoading) {
        return <ShapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <div className={styles.personDetailsContainer}>
                <div className={styles.personDetailsMain}>
                    <SectionTitle title={personDetails.name}/>
                    <h3>Биография</h3>
                    <p>{personDetails.biography}</p>
                </div>
                <div className={styles.personDetailsSub}>
                    <div className={styles.personDetailsPosterContainer}>
                        <Image
                            className={styles.personDetailsPosterImg}
                            src={`https://image.tmdb.org/t/p/w780${personDetails.profilePath}`}
                            alt='person_card'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            loading='lazy'
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {
    const personDetails = await Common.getPersonDetails(query.id);
    const personCombinedCredits = await Common.getPersonCombinedCredits(query.id);

    return {
        props: {
            personDetails,
            personCombinedCredits,
        }
    };
};

PersonPage.propTypes = {
    personDetails: PropTypes.object.isRequired,
    personCombinedCredits: PropTypes.object.isRequired
};
