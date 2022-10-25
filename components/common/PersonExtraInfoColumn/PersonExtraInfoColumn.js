import styles from './personExtraInfoColumn.module.scss';
import PropTypes from 'prop-types';
import { DateUse } from 'lib/DateUse';

const knownForDepartmentTypes = {
    'Acting': 'Актёрское искусство'
};
export const PersonExtraInfoColumn = ({ data }) => {

    const formattedBirthdayDate = DateUse.format(data.birthday, 'YYYY-MM-DD', 'll');
    const formattedDeathDate = DateUse.format(data.deathday, 'YYYY-MM-DD', 'll');

    const knownForDepartment = !!knownForDepartmentTypes[data.knownForDepartment]
        ? knownForDepartmentTypes[data.knownForDepartment]
        : data.knownForDepartment;

    return (
        <>
            {!!data.knownForDepartment && <h6 className={styles.label}>Известность за</h6>}
            {!!data.knownForDepartment && <p className={styles.text}>{knownForDepartment}</p>}

            {!!data.gender && <h6 className={styles.label}>Пол</h6>}
            {!!data.gender && <p className={styles.text}>{!!data.gender ? 'Женский' : 'Мужской'}</p>}

            {!!data.birthday && <h6 className={styles.label}>Дата рождения</h6>}
            {!!data.birthday && <p className={styles.text}>{formattedBirthdayDate}</p>}

            {!!data.deathday && <h6 className={styles.label}>Дата смерти</h6>}
            {!!data.deathday && <p className={styles.text}>{formattedDeathDate}</p>}

            {!!data.placeOfBirth && <h6 className={styles.label}>Место рождения</h6>}
            {!!data.placeOfBirth && <p className={styles.text}>{data.placeOfBirth}</p>}
        </>
    )
};

PersonExtraInfoColumn.propTypes = {
    data: PropTypes.shape({
        knownForDepartment: PropTypes.string,
        gender: PropTypes.number,
        birthday: PropTypes.string,
        deathday: PropTypes.string,
        placeOfBirth: PropTypes.string
    })
};

PersonExtraInfoColumn.defaultProps = {
    data: {
        knownForDepartment: null,
        gender: 0,
        birthday: null,
        deathday: null,
        placeOfBirth: null
    }
};
