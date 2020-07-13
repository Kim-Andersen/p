/**
 * Resolve paths aliases defined in tsconfig.json.
 * This must be imported before any imports are made using the aliased paths.
 */
import 'tsconfig-paths/register';

import { some, IPlace } from '@shared';

console.log(some);

const place: IPlace = {
  name: 'My place'
};

console.log('place', place);
