import styles from '@components/common/ContentExtraInfoColumn/contentExtraInfoColumn.module.scss';
import PropTypes from 'prop-types';
import { NumberUse } from 'lib/NumberUse';
import { map } from 'lodash';
import classNames from 'classnames/bind';
import Image from 'next/image';

const movieReleasedStatuses = {
    'Rumored': 'По слухам',
    'Planned': 'Планируется',
    'In Production': 'В производстве',
    'Post Production': 'Послепроизводственный этап',
    'Released': 'Выпущено',
    'Canceled': 'Отменено',
    'Returning Series': 'Продолжается',
    'Ended': 'Завершился'
};

const cx = classNames.bind(styles);

export const ContentExtraInfoColumn = ({ data }) => {
    return (
        <>
            {!!data.status && <h6 className={styles.label}>Статус</h6>}
            {!!data.status && <p className={styles.text}>{movieReleasedStatuses[data.status]}</p>}

            {!!data.budget && <h6 className={styles.label}>Бюджет</h6>}
            {!!data.budget && <p className={styles.text}>${NumberUse.numberWithCommas(data.budget)}</p>}

            {!!data.revenue && <h6 className={styles.label}>Сборы</h6>}
            {!!data.revenue && <p className={styles.text}>${NumberUse.numberWithCommas(data.revenue)}</p>}

            {!!data.spokenLanguages.length && <h6 className={styles.label}>Разговорные языки</h6>}
            {!!data.spokenLanguages.length &&
                <div className={cx(styles.mappedContent, styles.row)}>
                    {map(data.spokenLanguages, lang =>
                        <span key={lang.englishName}>{lang.englishName}</span>
                    )}
                </div>
            }

            {!!data.productionCountries.length && <h6 className={styles.label}>Страны производства</h6>}
            {!!data.productionCountries.length &&
                <div className={styles.mappedContent}>
                    {map(data.productionCountries, country =>
                        <span key={country.nativeName}>{country.nativeName}</span>
                    )}
                </div>
            }

            {!!data.productionCompanies.length && <h6 className={styles.label}>Производство</h6>}
            {!!data.productionCompanies.length &&
                <div className={styles.mappedContent}>
                    {map(data.productionCompanies, company =>
                        <span key={company.name}>{company.name}</span>
                    )}
                </div>
            }

            {!!data.networks && <h6 className={styles.label}>Телесети</h6>}
            {!!data.networks &&
                <div className={styles.mappedContent}>
                    {map(data.networks, network =>
                        !!network.logoPath && <div className={styles.networkLogo} key={network.name}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${network.logoPath}`}
                                alt='network_logo'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='left center'
                                loading='lazy'
                                unoptimized
                            />
                        </div>
                    )}
                </div>
            }
        </>
    )
};

ContentExtraInfoColumn.propTypes = {
    data: PropTypes.shape({
        status: PropTypes.string,
        originalLanguage: PropTypes.string,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        productionCountries: PropTypes.array,
        productionCompanies: PropTypes.array,
        networks: PropTypes.array,
    })
};

ContentExtraInfoColumn.defaultProps = {
    data: {
        status: null,
        originalLanguage: null,
        budget: null,
        revenue: null,
        productionCountries: [],
        productionCompanies: [],
        networks: []
    }
};
