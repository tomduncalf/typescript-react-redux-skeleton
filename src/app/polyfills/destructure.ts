import { omit } from 'lodash'

/**
 * Function to emulate the ES7 destructuring with spread operator behaviour, commonly used with Redux.
 * Returns a copy of `obj` with the properties specified in `keys` copied over,
 * and all remaining properties inside an object in a property called `__rest`.
 *
 * Example:
 * ES7 code:      const { value, onChange, onBlur, ...props } = this.props
 * ES6 with this: const { value, onChange, onBlur, __rest: props } = destructure(this.props, ['value', 'onChange', 'onBlur'])
 *
 * TODO deprecate this when tsc supports the ES7 operator: https://github.com/Microsoft/TypeScript/issues/2103
 */
export function destructure(obj: Object, keys: string[]): any {
    let destructured: any = {}

    // Map all the properties in keys on to the new object
    for (let key of keys) {
        destructured[key] = obj[key]
    }

    // And then get the left over properties and assign to "__rest"
    /* tslint:disable:no-string-literal */
    destructured['__rest'] = omit(obj, keys)

    return destructured
}
