export type Maybe<T> = T | null;

export interface Category {
  image: Maybe<string>;
  name: string;
  slugName: string;
}

export enum GeometryFeature {
  Feature = 'Feature',
}

export enum GeometryType {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  MultiPoint = 'MultiPoint',
  MultiLineString = 'MultiLineString',
  MultiPolygon = 'MultiPolygon',
}

export interface GeometryPoint {
  type: GeometryType.Point;
  coordinates: Array<number>;
}

export interface Venue {
  type: GeometryFeature.Feature;
  geometry: GeometryPoint;
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

export interface Location {
  type: GeometryFeature.Feature;
  geometry: GeometryPoint;
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
