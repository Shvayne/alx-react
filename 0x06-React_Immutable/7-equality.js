import { Map, is } from 'immutable';

/**
 * Checks if two Immutable Maps are equal
 * @param {Map} map1 - The first Immutable Map
 * @param {Map} map2 - The second Immutable Map
 * @returns {boolean} - True if the Maps are equal, false otherwise
 */
export function areMapsEqual(map1, map2) {
    return is(map1, map2);
}
