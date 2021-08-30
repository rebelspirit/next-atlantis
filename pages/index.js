import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function IndexPage() {

    return (
        <main className={cx(styles.contentContainer)}>

        </main>
    );
}
