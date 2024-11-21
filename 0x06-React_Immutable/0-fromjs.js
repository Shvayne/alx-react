import { fromJS } from "./node_modules/immutable/dist/immutable";

/**
 * Converts a plain Javascript object into an immutable Map
 * @param {Object} object - The plain Javascript object
 * @returns {Map} - The immutable Map representation of the object
 */
export function getImmutableObject(object) {
  return fromJS(object);
}
