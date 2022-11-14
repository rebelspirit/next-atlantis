import styles from './nightMode.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';

const cx = classNames.bind(styles);

export const NightMode = ({ onClickSetDarkMode, isChecked }) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onClickSetDarkMode}
            />
            <span className={cx(styles.slider, styles.round)}>
                {!isChecked &&
                    <IconWrapper height={12} width={12} className={cx(styles.icon, { 'dayMode': !isChecked })}>
                        <IoSunny/>
                    </IconWrapper>
                }

                {isChecked &&
                    <IconWrapper height={12} width={12} className={cx(styles.icon, { 'nightMode': isChecked })}>
                        <IoMoon/>
                    </IconWrapper>
                }
            </span>
        </label>
    )
};

NightMode.propTypes = {
    onClickSetDarkMode: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
};
NightMode.defaultProps = {
    isChecked: false,
};
