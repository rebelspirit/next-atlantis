import { keys, map, assign, camelCase, isArray, eq, reduce } from 'lodash';

export class ObjectUse {

    static camelCaseObjectKeys(object) {
        if (isArray(object)) {
            return map(object, value => this.camelCaseObjectKeys(value));
        }
        else if (object != null && eq(object.constructor, Object)) {
            return reduce(keys(object),
                (result, key) => ({
                    ...result,
                    [camelCase(key)]: this.camelCaseObjectKeys(object[key]),
                }),
                {},
            );
        }
        return object;
    }
}
