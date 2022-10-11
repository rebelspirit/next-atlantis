import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Search } from 'Api/Search';
import { map, compact } from 'lodash';
import { ContentCard } from '@components/common/ContentCard/ContentCard';
import { PersonCard } from '@components/common/PersonCard/PersonCard';
import { NoDataPlug } from '@components/common/NoDataPlug/NoDataPlug';
import { SapeLoader } from '@components/common/ShapeLoader/ShapeLoader';

export default function SearchPage({ searchedContent }) {
    const isLoading = useLoading();

    const isSearchResultNoData = !compact([!!searchedContent.movie.length, !!searchedContent.tv.length, !!searchedContent.person.length]).length;

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook
        return <SapeLoader/>
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
                    {map(searchedContent.movie, content =>
                        <ContentCard
                            key={content.id}
                            id={content.id}
                            mediaType={content.mediaType}
                            title={content.title}
                            poster={content.posterPath}
                            date={content.releaseDate}
                        />
                    )}
                </div>
            }

            {!!searchedContent.tv.length &&
                <SectionTitle title='Сериалы и ТВ-шоу'/>
            }

            {!!searchedContent.tv.length &&
                <div className={styles.contentMappedContainer}>
                    {map(searchedContent.tv, content =>
                        <ContentCard
                            key={content.id}
                            id={content.id}
                            mediaType={content.mediaType}
                            title={content.name}
                            poster={content.posterPath}
                            date={content.firstAirDate}
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
    const searchedContent = await Search.getSearchedContent(encodeURI(query.search));

    return {
        props: {
            searchedContent
        }
    };
}
