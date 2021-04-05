export type Maybe<T> = T | null;

export interface Category {
  image: Maybe<string>;
  name: string;
  slugName: string;
}
/*
Example Geometry Point using GeoJSON:
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
*/
export interface GeometryPoint {
  type: string;
  coordinates: Array<number>;
  properties: any;
}

export interface Venue extends GeometryPoint {
  properties: {
    name: string;
    slugName: string;
    location: Location;
    lat: number;
    lng: number;
    category: Category;
    features: Array<Feature>;
  };
}

export interface Location extends GeometryPoint {
  properties: {
    name: string;
    slugName: string;
  };
}

export interface Feature {
  name: string;
  slugName: string;
  actions: Array<Action>;
}

export interface Action {
  name: string;
  slugName: string;
}
