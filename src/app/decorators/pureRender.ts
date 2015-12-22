/**
 * Decorator for marking a component as "pure", meaning that it will always render the same output given
 * the same input props and state. This allows us to trivially implement `shouldComponentUpdate` by comparing
 * previous and current props and state, and entirely skip rendering the component if they are unchanged.
 *
 * This version ignores the `styles` prop, as it appears that react-css-modules dynamically adds and removes
 * this prop without changing anything else, causing components to re-render even when unchanged.
 *
 * TODO investigate why the styles prop gets added and removed
 */

import shallowEqual from 'shallowequal'
import { omit } from 'lodash'

/**
 * Normalize a props object, removing any keys we expect to be different and want to ignore in the comparison
 * - currently "styles", which is injected by react-css-modules at render time
 */
function normalizeProps(props: any): any {
  return omit(props, [
    'styles'
  ])
}

/**
 * Modified version of standard pureRenderMixin algorithm, ignoring certain properties in the comparison
 */
export function shouldComponentUpdate(nextProps: any, nextState: any): boolean {
  const equal = shallowEqual(normalizeProps(this.props), normalizeProps(nextProps), null, null)
                && shallowEqual(this.state, nextState)
  // This is left in commented out as it is useful for debugging performance issues
  /*if (this.constructor.displayName === 'SearchFilters') {
    console.log('shouldComponentUpdate', !equal, this.constructor.displayName, normalizeProps(this.props), normalizeProps(nextProps))
  }*/
  return !equal
}

/**
 * Decorate a component with the "pure" shouldComponentUpdate
 */
export default function pureRenderDecorator(component: any): void {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate
}
