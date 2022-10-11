import styles from 'components/common/IconWrapper/iconWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const IconWrapper = ({ children, width, height, className }) => (
    <i className={cx(styles.icon, className)} style={{ width: width, height: height }}>
        {children}
    </i>
);
