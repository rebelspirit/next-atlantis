import { Sidebar } from '@components/Sidebar/Sidebar';
import styles from './index.module.scss';
import { MovieCard } from '@components/elements/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { ContentFilterRow } from '@components/ContentFilterRow/ContentFilterRow';
import { SidebarNew } from '@components/Sidebar/SidebarNew';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function IndexPage() {
    const { isOpenSidebar } = useSelector(store => store.sidebar);

    return (
        <>
            {/*<Sidebar*/}
            {/*    image={true}*/}
            {/*    collapsed={!isOpenSidebar}*/}
            {/*/>*/}
            <SidebarNew/>
            <section className={cx(styles.contentContainer, { 'isSidebarClose': !isOpenSidebar })}>
                <ContentFilterRow/>
                <div style={{padding: '25px', display: 'flex', flexWrap: 'wrap', width: '100%', maxWidth: '1250px', margin: '60px auto 0 auto'}}>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>

                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                    {/*<MovieCard/>*/}
                </div>
            </section>
        </>
    );
}
