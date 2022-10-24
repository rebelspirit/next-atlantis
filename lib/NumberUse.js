import { eq, split, includes, toString } from 'lodash';

export class NumberUse {
    static isEven(n) {
        return eq(n % 2, 0);
    }

    static isOdd(n) {
        return eq(Math.abs(n % 2), 1);
    }

    static withoutFloatInNumber(number) {
        if (includes(toString(number), '.')) {
            return chain(split(number, '.')).join('').value();
        }
        return number;
    }

    static numberWithCommas(number) {
        return this.withoutFloatInNumber(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
