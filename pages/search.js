import styles from './index.module.scss';
import { useLoading } from 'hooks/useLoading';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Search } from 'api/Search';
import { map, compact } from 'lodash';
import { ContentCardVertival } from '@components/common/ContentCardVertical/ContentCardVertival';
import { PersonCard } from '@components/common/PersonCard/PersonCard';
import { NoDataPlug } from '@components/common/NoDataPlug/NoDataPlug';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';

export default function SearchPage({ searchedContent }) {
    const isLoading = useLoading();

    const isSearchResultNoData = !compact([!!searchedContent.movie.length, !!searchedContent.tv.length, !!searchedContent.person.length]).length;

    console.log('searchedContent', searchedContent);

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook
        return <ShapeLoader/>
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
                        <ContentCardVertival
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
                        <ContentCardVertival
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
