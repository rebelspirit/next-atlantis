import { includes } from 'lodash';

export class StringUse {

    static fixTaglineString(str) {
        if (includes(str, '«') || includes(str, '»')) {
            return str.slice(1, -1)
        }

        return str;
    }
}
