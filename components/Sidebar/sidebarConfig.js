import { BsCollectionPlayFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';
import { RiMovie2Fill, RiSettings4Fill, RiLogoutBoxRFill } from 'react-icons/ri';
import { IoTvSharp } from 'react-icons/io5';
import { FaFolder } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

export const sidebarConfig = {
    menu: [
        { name: 'Browse', link: '', icon: <BsCollectionPlayFill/> },
        { name: 'Watchlist', link: '', icon: <AiFillHeart/> },
        { name: 'Coming soon', link: '', icon: <ImFire/> },
    ],
    content: [
        { name: 'Movies', link: '', icon: <RiMovie2Fill/> },
        { name: 'Serials', link: '', icon: <IoTvSharp/> },
        { name: 'Collections', link: '', icon: <FaFolder/> },
    ],
    general: [
        { name: 'Settings', link: '', icon: <RiSettings4Fill/> },
        { name: 'Feedback', link: '', icon: <MdFeedback/> },
        { name: 'Log out', link: '', icon: <RiLogoutBoxRFill/> },
    ]
}
