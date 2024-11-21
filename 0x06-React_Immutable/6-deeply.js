import { Map, List } from 'immutable';

/**
 * Deeply merges two objects and returns a list of the merged values
 * @param {Object} page1 - First object
 * @param {Object} page2 - Second object
 * @returns {List} - Immutable List containing the values of the merged object
 */
export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeDeep(map2);
  return List(mergedMap.values());
}
