import { round } from 'lodash';
import { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

export const Number = ({ numberProps, toFixed }) => {
    const [flip, set] = useState(false)
    const { number } = useSpring({
        reset: false,
        reverse: false,
        from: { number: 0 },
        number: numberProps,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return <animated.span>{number.to(num => round(num, toFixed))}</animated.span>
}
