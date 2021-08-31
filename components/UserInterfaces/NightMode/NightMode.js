import styles from './nightMode.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { IoMoon, IoSunny } from 'react-icons/io5';

const cx = classNames.bind(styles);

export const NightMode = ({ callback, isChecked, id, systemMessage, cn }) => {

    return (
        <label className={styles.switch}>
            <input
                //className={cx({[`${cn}`]: cn})}
                type="checkbox"
                checked={isChecked}
                onChange={callback}
            />
            <span className={cx(styles.slider, styles.round)}>
               <i className={styles.icon}>
                   <IoSunny/>
               </i>
            </span>
        </label>
    )
}
NightMode.propTypes = {
    callback: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    systemMessage: PropTypes.func,
    cn: PropTypes.string
}
NightMode.defaultProps = {
    isChecked: false,
    cn: null
}
