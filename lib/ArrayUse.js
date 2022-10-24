import { compact, eq, filter, keys, map, omit, reverse } from 'lodash';
import { ObjectUse } from 'lib/ObjectUse';

export class ArrayUse {

    static collectionHasRequiredFields(array = [], requiredFields = [], camelCaseObjectKeys = true) {
        return filter(camelCaseObjectKeys ? ObjectUse.camelCaseObjectKeys(array) : array, content => {
                const validationResult = compact(map(requiredFields, field => {
                    return content[field] ? content[field] : null
                }));

                if (eq(validationResult.length, requiredFields.length)) {
                    return content;
                }
            })
    }

    static convertExternalIdsObjToArray(externalIds = {}) {
        return compact(reverse(map(keys(omit(externalIds, 'id')), type => {
            if (externalIds[type]) {
                return { type, id: externalIds[type] }
            }
            return null
        })))
    }
}
