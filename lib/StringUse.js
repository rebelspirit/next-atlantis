import { floor, includes, round, eq } from 'lodash';

export class StringUse {

    static fixTaglineString(str) {
        if (includes(str, '«') || includes(str, '»')) {
            return str.slice(1, -1)
        }

        return str;
    }

    static runtimeLengthString(number) {
        const runtimeHours = floor((number / 60));
        const runtimeMinutes = round(((number / 60) - runtimeHours) * 60);

        return eq(runtimeHours, 0)
            ? runtimeMinutes + ' минут'
            : runtimeHours + ' ч. ' + runtimeMinutes + ' минут'
    };
}
