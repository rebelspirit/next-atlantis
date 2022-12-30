import styles from '@components/common/ContentCardHorizontal/contentCardHorizontal.module.scss';
import PropTypes from 'prop-types';

export const ContentCardHorizontalFooter = ({ title, date, overview }) => {
    return (
        <div className={styles.contentCardAltDescriptionContainer}>
            <h2 className={styles.contentCardAltTitle}>{title}</h2>
            <h6 className={styles.contentCardAltYear}>{date}</h6>
            <p className={styles.contentCardAltDescription}>{overview}</p>
        </div>
    )
};

ContentCardHorizontalFooter.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    overview: PropTypes.string
};
