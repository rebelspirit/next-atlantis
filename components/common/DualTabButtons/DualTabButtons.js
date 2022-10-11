import styles from './dualTabButtons.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const DualTabButtons = ({ onClick, selected, settings: { firstButtonName, secondButtonName } }) => (
    <div className={styles.dualTabButtonsContainer}>
        <p className={cx({ 'selected': selected })} onClick={onClick}>{firstButtonName}</p>
        <span>|</span>
        <p className={cx({ 'selected': !selected })} onClick={onClick}>{secondButtonName}</p>
    </div>
);

DualTabButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    settings: PropTypes.object.isRequired
};
