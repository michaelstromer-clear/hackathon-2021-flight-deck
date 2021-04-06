import {
  Venue,
  Feature,
  Category,
  GeometryFeature,
  GeometryType,
  Maybe,
} from 'types';

export function createCategory(
  image: string,
  name: string,
  slugName: string
): Category {
  return {
    image,
    name,
    slugName,
  };
}

export function createVenue(
  name: string,
  slugName: string,
  lat: number,
  lng: number,
  category: Category,
  features: Array<Feature>,
  terminalHours: Maybe<Map<string, string>>
): Venue {
  return {
    type: GeometryFeature.Feature,
    geometry: {
      type: GeometryType.Point,
      coordinates: [lat, lng],
    },
    properties: {
      name,
      slugName,
      lat,
      lng,
      category,
      features,
      terminalHours,
    },
  };
}
