import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Slider } from '@components/Slider/Slider';

const cx = classNames.bind(styles);

export default function IndexPage() {

    return (
        <main className={cx(styles.contentContainer)}>
            <Slider/>
        </main>
    );
}
