import { Map } from 'immutable';

/**
 * Converts a plain Javascript object into a immutable Map
 * @param {Object} object - The plain Javascript object
 * @returns {Map} - The immutable Map representation of the object
 */
export function getImmutableObject(object) {
  return Map(object);
}
