import styles from 'components/common/ExtraInfoColumn/extraInfoColumn.module.scss';
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

export const ExtraInfoColumn = ({ content }) => {
    return (
        <>
            {!!content.status && <h6 className={styles.label}>Статус</h6>}
            {!!content.status && <p className={styles.text}>{movieReleasedStatuses[content.status]}</p>}

            {!!content.budget && <h6 className={styles.label}>Бюджет</h6>}
            {!!content.budget && <p className={styles.text}>${NumberUse.numberWithCommas(content.budget)}</p>}

            {!!content.revenue && <h6 className={styles.label}>Сборы</h6>}
            {!!content.revenue && <p className={styles.text}>${NumberUse.numberWithCommas(content.revenue)}</p>}

            {!!content.spokenLanguages.length && <h6 className={styles.label}>Разговорные языки</h6>}
            {!!content.spokenLanguages.length &&
                <div className={cx(styles.mappedContent, styles.row)}>
                    {map(content.spokenLanguages, lang =>
                        <span key={lang.englishName}>{lang.englishName}</span>
                    )}
                </div>
            }

            {!!content.productionCountries.length && <h6 className={styles.label}>Страны производства</h6>}
            {!!content.productionCountries.length &&
                <div className={styles.mappedContent}>
                    {map(content.productionCountries, country =>
                        <span key={country.nativeName}>{country.nativeName}</span>
                    )}
                </div>
            }

            {!!content.productionCompanies.length && <h6 className={styles.label}>Производство</h6>}
            {!!content.productionCompanies.length &&
                <div className={styles.mappedContent}>
                    {map(content.productionCompanies, company =>
                        <span key={company.name}>{company.name}</span>
                    )}
                </div>
            }

            {!!content.networks && <h6 className={styles.label}>Телесети</h6>}
            {!!content.networks &&
                <div className={styles.mappedContent}>
                    {map(content.networks, network =>
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

ExtraInfoColumn.propTypes = {
    content: PropTypes.shape({
        status: PropTypes.string,
        originalLanguage: PropTypes.string,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        productionCountries: PropTypes.array,
        productionCompanies: PropTypes.array,
        networks: PropTypes.array,
    })
};

ExtraInfoColumn.defaultProps = {
    content: {
        status: null,
        originalLanguage: null,
        budget: null,
        revenue: null,
        productionCountries: [],
        productionCompanies: [],
        networks: []
    }
};
