import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './VotingPercentCircle.module.scss';
import { round } from 'lodash';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const VotingPercentCircle = ({ voteAverage }) => {
    const percent = round(voteAverage * 10);
    const text = percent ? `${percent}%` : 'NR';

    const switchColor = useCallback(percent => {
        if (percent <= 40) {
            return 'rgba(252, 98, 98, 1)'
        }
        else if (percent <= 70) {
            return 'rgba(255, 216, 111, 1)'
        }
        else {
            return 'rgba(33,208,122, 1)'
        }
    }, []);

    return (
        <div className={styles.circularProgressbarContainer}>
            <CircularProgressbar
                value={percent}
                text={text}
                background
                backgroundPadding={6}
                strokeWidth={5}
                styles={buildStyles({
                    backgroundColor: 'rgba(25,25,25, 1)',
                    textColor: '#dedede',
                    textSize: '23px',
                    pathColor: switchColor(percent),
                    trailColor: 'transparent'
                })}
            />
        </div>
    )
};

VotingPercentCircle.propTypes = {
    voteAverage: PropTypes.number
}
