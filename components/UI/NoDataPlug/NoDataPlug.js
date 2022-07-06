import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import styles from './noDataPlug.module.scss';

export const NoDataPlug = () => {
    return (
        <>
            <SectionTitle title='К сожалению, мы не смогли найти запрашиваемый контент :('/>
            <div className={styles.noDataImage}/>
        </>
    )
}
