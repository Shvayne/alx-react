import { Map } from 'immutable';

//Create an immutable Map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

//create a second immutable by modifying specofic values from first immutable
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
