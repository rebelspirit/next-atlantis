import PropTypes from 'prop-types';
import styles from './socialNetworks.module.scss';
import { map, some } from 'lodash';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import classNames from 'classnames/bind';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaImdb } from 'react-icons/fa';

const cx = classNames.bind(styles);

const socialMediaTypes = {
    facebookId: {
        link: 'https://www.facebook.com/',
        icon: <AiFillFacebook/>
    },
    instagramId: {
        link: 'https://www.instagram.com/',
        icon: <AiFillInstagram/>
    },
    twitterId: {
        link: 'https://twitter.com/',
        icon: <AiOutlineTwitter/>
    },
    imdbId: {
        link: 'https://www.imdb.com/title/',
        icon: <FaImdb/>
    }
};

export const SocialNetworks = ({ externalIds }) => {
    const isExternalIdsSeparateLineExists = some(externalIds, { type: 'imdbId' }) && externalIds.length > 1;

    return (
        <div className={styles.socialNetworksContainer}>
            {map(externalIds, socialNetwork =>
                <a
                    className={cx({ 'separateLine': isExternalIdsSeparateLineExists })}
                    key={socialNetwork.type}
                    href={socialMediaTypes[socialNetwork.type]?.link + socialNetwork.id}
                    target='_blank'
                >
                    <IconWrapper width={32} height={32}>
                        {socialMediaTypes[socialNetwork.type]?.icon}
                    </IconWrapper>
                </a>
            )}
        </div>
    )
};

SocialNetworks.propTypes = {
    externalIds: PropTypes.array.isRequired
};
