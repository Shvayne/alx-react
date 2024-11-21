import { List, Map } from 'immutable';
/**
 * Combine two arrays into a single immutable List
 * @param {Array} Page1 - First array
 * @param {Array} page2 - Second array
 * @returns {List} - Immutable list containing values from both arrays
 */

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merges two objects intp a single immutable List
 * if keys overlap, values from page2 are used
 * @param {Object} page1 - First object
 * @param {Object} page2 - Second object
 * @returns {List} - Immutable List containing the values of the merged objects
 */
export function MergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.merge(map2);
  return List(mergedMap.values());
}
