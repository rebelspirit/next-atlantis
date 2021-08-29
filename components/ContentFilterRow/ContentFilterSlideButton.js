import styles from './contentFilterRow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ContentFilterSlideButton = ({ children, className, callback }) => {

    return (
        <button className={cx(styles.contentFilterSlideButton, className)} onClick={callback}>
            {children}
        </button>
    )
}
