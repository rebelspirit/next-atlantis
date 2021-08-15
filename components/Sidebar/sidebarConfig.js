import styles from './sidebar.module.scss';
import {
    FaHome,
    FaFire,
    FaFilm,
    FaTv,
    FaList,
    FaFolder,
    FaHistory,
    FaClock,
    FaThumbsUp,
    FaCog,
    FaFlag,
    FaQuestionCircle,
    FaCommentAlt,
} from 'react-icons/fa';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const sidebarConfig = {
    header: [
        { name: 'Главная', link: '/', icon: <FaHome/>, suffix: false },
        { name: 'В тренде', link: '/trends', icon: <FaFire/>, suffix: <span className={cx(styles.badge, styles.green)}>New</span>},
    ],
    main: [
        { name: 'Фильмы', link: '/', icon: <FaFilm/>, suffix: false },
        { name: 'Сериалы', link: '/trends', icon: <FaTv/>, suffix: <span className={cx(styles.badge, styles.green)}>New</span>},
        { name: 'Коллекции', link: '/', icon: <FaList/>, suffix: false }
    ],
    footer:         [
        { name: 'Библиотека', link: '/', icon: <FaFolder/>, suffix: false },
        { name: 'История', link: '/', icon: <FaHistory/>, suffix: false },
        { name: 'Смотреть позже', link: '/', icon: <FaClock/>, suffix: false },
        { name: 'Понравившиеся', link: '/', icon: <FaThumbsUp/>, suffix: false },
        { name: 'Настройки', link: '/', icon: <FaCog/>, suffix: false },
        { name: 'Жалобы', link: '/', icon: <FaFlag/>, suffix: false },
        { name: 'Справка', link: '/', icon: <FaQuestionCircle/>, suffix: false },
        { name: 'Отправить отзыв', link: '/', icon: <FaCommentAlt/>, suffix: false },
    ],
}
