export interface Coordinates {
  lat: string;
  lng: string;
}

export interface City extends Coordinates {
  name: string;
  country: string;
}

export interface CityWithDistance extends City {
  distance: number;
}
