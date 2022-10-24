import { compact, eq, filter, map } from 'lodash';
import { ObjectUse } from 'lib/ObjectUse';

export class ArrayUse {

    static collectionHasRequiredFields(array = [], requiredFields = []) {
        return filter(ObjectUse.camelCaseObjectKeys(array), content => {
            const validationResult = compact(map(requiredFields, field => {
                return content[field] ? content[field] : null
            }));

            if (eq(validationResult.length, requiredFields.length)) {
                return content;
            }
        })
    }
}
