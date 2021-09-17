import { map } from 'lodash';
import { Children } from 'react';
import { animated, useTrail } from 'react-spring';

export const Trail = ({ open, children }) => {
    const items = Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        // height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <>
            {map(trail, ({ height, ...style }, index) => (
                <animated.div
                    key={index}
                    style={{ width: '100%', ...style }}
                >
                    {items[index]}
                </animated.div>
            ))}
        </>
    )
}
