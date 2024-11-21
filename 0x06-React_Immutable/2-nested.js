export default function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => (acc !== undefined ? acc[key] : undefined), object);
}
