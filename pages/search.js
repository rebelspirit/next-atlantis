import { useEffect } from 'react';
import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Search } from 'Api/Search';
import { map } from 'lodash';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { PersonCard } from '@components/UI/PersonCard/PersonCard';

export default function SearchPage({ searchedContent }) {
    const isLoading = useLoading();

    useEffect(() => {
        console.log('searchedContent', searchedContent);

    }, [searchedContent])

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.contentPageContainer}>
            {!!searchedContent.movie.length &&
                <SectionTitle title='Полнометражные фильмы'/>
            }

            <div className={styles.contentMappedContainer}>
                {map(searchedContent.movie, movie =>
                    <ContentCard
                        key={movie.id}
                        title={movie.title}
                        poster={movie.posterPath}
                        date={movie.releaseDate}
                    />
                )}
            </div>

            {!!searchedContent.tv.length &&
                <SectionTitle title='Сериалы и ТВ-шоу'/>
            }

            <div className={styles.contentMappedContainer}>
                {map(searchedContent.tv, movie =>
                    <ContentCard
                        key={movie.id}
                        title={movie.name}
                        poster={movie.posterPath}
                        date={movie.firstAirDate}
                    />
                )}
            </div>

            {!!searchedContent.person.length &&
                <SectionTitle title='Знаменитости'/>
            }

            <div className={styles.contentMappedContainer}>
                {map(searchedContent.person, person =>
                    <PersonCard
                        key={person.id}
                        name={person.name}
                        knownForDepartment={person.knownForDepartment}
                        poster={person.profilePath}
                    />
                )}
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {
    const searchedContent = await Search.getSearchedContent(query.search);

    return {
        props: {
            searchedContent
        }
    };
}
