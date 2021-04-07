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
    lat: number;
    lng: number;
    category: Category;
    features: Array<Feature>;
    terminalHours: Maybe<Map<string, string>>;
  };
}

export interface Feature {
  name: string;
}
