import { List } from 'immutable';

/**
 * Converts an array into an immutable List
 * @param {Array} array - The plain javascript array
 * @returns {List} - the immutable List
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Appends a string to immutable List
 * @param {List} List - The immutable List
 * @param {string} element - The string to append
 * @returns {List} - The updated Immutable List
 */
export function addElementToList(list, element) {
  return list.push(element);
}
