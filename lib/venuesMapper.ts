import { createVenue } from './utils';
import { Venue } from 'types';

const venuesData = require('./venues.json');
export const venues = venuesData.map((venue: Venue) => {
  const { geometry } = venue;
  const { name, slugName, category, features } = venue.properties;
  const [lat, lng] = geometry.coordinates;
  return createVenue(name, slugName, lat, lng, category, features);
});
