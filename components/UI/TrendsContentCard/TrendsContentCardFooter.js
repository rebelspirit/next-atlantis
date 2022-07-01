import styles from '@components/UI/TrendsContentCard/trendsContentCard.module.scss';
import PropTypes from 'prop-types';

export const TrendsContentCardFooter = ({ title, date, overview }) => {
    return (
        <div className={styles.trendsDescriptionContainer}>
            <h2 className={styles.trendsTitle}>{title}</h2>
            <h6 className={styles.trendsYear}>{date}</h6>
            <p className={styles.trendsDescription}>{overview}</p>
        </div>
    )
};

TrendsContentCardFooter.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    overview: PropTypes.string
};
