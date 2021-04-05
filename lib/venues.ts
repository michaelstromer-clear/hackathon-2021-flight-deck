import {
  createVenue,
  createCategory,
  createFeature,
  createLocation,
  createAction,
} from './utils';

const newYorkCity = createLocation('New York City', 'new-york-city', 0.0, 0.0);
const sports = createCategory('', 'Sports', 'sports');
const healthPass = createFeature('HealthPass', 'healthpass', [
  createAction('Link Lab', 'link-lab'),
  createAction('Sync Records', 'sync-record'),
]);
export const venues = [
  createVenue(
    'Yankee Stadium',
    'yankee-stadium',
    newYorkCity,
    0.0,
    0.0,
    sports,
    [healthPass]
  ),
  createVenue('Citi Field', 'citi-field', newYorkCity, 0.0, 0.0, sports, []),
  createVenue(
    'Barclays Center',
    'barclays-center',
    newYorkCity,
    0.0,
    0.0,
    sports,
    [healthPass]
  ),
];
