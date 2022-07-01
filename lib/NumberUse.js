import { eq } from 'lodash';

export class NumberUse {
    static isEven(n) {
        return eq(n % 2, 0);
    }

    static isOdd(n) {
        return eq(Math.abs(n % 2), 1);
    }
}
