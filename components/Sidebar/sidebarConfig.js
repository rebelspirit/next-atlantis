// import { BsCollectionPlayFill } from 'react-icons/bs';
// import { AiFillHeart } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';
import { RiMovie2Fill, RiSettings4Fill, RiLogoutBoxRFill } from 'react-icons/ri';
import { IoTvSharp } from 'react-icons/io5';
import { FaFolder } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

export const sidebarConfig = {
    general: [
        { name: 'В тренде', link: '/', icon: <ImFire/> },
        // { name: 'Browse', link: '', icon: <BsCollectionPlayFill/> },
        // { name: 'Watchlist', link: '', icon: <AiFillHeart/> },
    ],
    content: [
        { name: 'Фильмы', link: '/movies', icon: <RiMovie2Fill/> },
        { name: 'Сериалы', link: '/serials', icon: <IoTvSharp/> },
        { name: 'Коллекции', link: '', icon: <FaFolder/> },
    ],
    useful: [
        { name: 'Настройки', link: '', icon: <RiSettings4Fill/> },
        { name: 'Обратная связь', link: '', icon: <MdFeedback/> },
        { name: 'Выход', link: '', icon: <RiLogoutBoxRFill/> },
    ]
}
