import PropTypes from 'prop-types';
import styles from './sectionTitle.module.scss';

export const SectionTitle = ({ title }) => {
    return <h2 className={styles.sectionTitle}>{title}</h2>
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
};
