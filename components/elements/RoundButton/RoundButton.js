import styles, { roundButton } from './roundButton.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const RoundButton = ({extendedClassName, callback, children}) => (
    <div
        className={cx(roundButton, extendedClassName)}
        onClick={callback}
    >
        {children}
    </div>
)

RoundButton.propTypes = {
    extendedClassName: PropTypes.string,
    callback: PropTypes.func
};
