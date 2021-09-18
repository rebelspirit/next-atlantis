import { Spring, animated } from 'react-spring';

const fade = {
    from: { opacity: 0 },
    to: { opacity: 1 }
};
const fadeOut = {
    from: { opacity: 1 },
    to: { opacity: 0 }
};
export const Fade = ({ children, show }) => {

    return <Spring
        from={show ? fade.from : fadeOut.from}
        to={show ? fade.to : fadeOut.to}>
        {styles => (
            <animated.div style={styles}>
                {children}
            </animated.div>
        )}
    </Spring>
}
