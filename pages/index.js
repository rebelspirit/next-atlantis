import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Slider } from '@components/Slider/Slider';
import { TrendsMovieCard } from '@components/UserInterfaces/TrendsMovieCard/TrendsMovieCard';
import { TrendsRow } from '@components/TrendsRow/TrendsRow';

const cx = classNames.bind(styles);

export default function IndexPage() {

    return (
        <main className={cx(styles.contentContainer)}>
            <Slider/>

            <TrendsRow/>
            <TrendsRow/>
        </main>
    );
}
