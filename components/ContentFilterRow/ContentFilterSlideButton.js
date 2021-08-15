import styles from './contentFilterRow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ContentFilterSlideButton = ({ children, className }) => {

    return (
        <button className={cx(styles.contentFilterSlideButton, className)}>
            {children}
        </button>
    )
}
