import {
  Venue,
  Feature,
  Category,
  Action,
  GeometryFeature,
  GeometryType,
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
  features: Array<Feature>
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
    },
  };
}

export function createFeature(
  name: string,
  slugName: string,
  actions: Array<Action>
): Feature {
  return { name, slugName, actions };
}

export function createAction(name: string, slugName: string): Action {
  return { name, slugName };
}
