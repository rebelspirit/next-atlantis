import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';

export default function SearchPage({ query }) {
    const isLoading = useLoading();
    console.log('props', query);
    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title='Результаты поиска'/>


        </div>
    )
};

export const getServerSideProps = async ({ query }) => {
    return {
        props: {
            query: query
        }
    };
}
