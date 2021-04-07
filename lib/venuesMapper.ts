import { createVenue } from './utils';
import { Venue } from 'types';

const venuesData = require('./geojson/venues.json');
export const venues = venuesData.features.map((venue: Venue) => {
  const { geometry } = venue;
  const {
    name,
    slugName,
    category,
    features,
    terminalHours,
  } = venue.properties;
  const [lat, lng] = geometry.coordinates;
  return createVenue(
    name,
    slugName,
    lat,
    lng,
    category,
    features,
    terminalHours
  );
});
