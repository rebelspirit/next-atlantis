import { useEffect } from 'react';
import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Search } from 'Api/Search';
import { map, compact } from 'lodash';
import { ContentCard } from '@components/UI/ContentCard/ContentCard';
import { PersonCard } from '@components/UI/PersonCard/PersonCard';
import { NoDataPlug } from '@components/UI/NoDataPlug/NoDataPlug';

export default function SearchPage({ searchedContent }) {
    const isLoading = useLoading();

    const isSearchResultNoData = !compact([!!searchedContent.movie.length, !!searchedContent.tv.length, !!searchedContent.person.length]).length;

    useEffect(() => {
        console.log('searchedContent', searchedContent);

    }, [searchedContent])

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    return (
        <div className={styles.contentPageContainer}>
            {isSearchResultNoData &&
                <NoDataPlug/>
            }

            {!!searchedContent.movie.length &&
                <SectionTitle title='Полнометражные фильмы'/>
            }

            {!!searchedContent.movie.length &&
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
            }

            {!!searchedContent.tv.length &&
                <SectionTitle title='Сериалы и ТВ-шоу'/>
            }

            {!!searchedContent.tv.length &&
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
            }

            {!!searchedContent.person.length &&
                <SectionTitle title='Знаменитости'/>
            }

            {!!searchedContent.person.length &&
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
            }
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
