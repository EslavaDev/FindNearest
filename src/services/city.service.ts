import {City} from '../types';

export interface CityService {
  loadCities(): Promise<City[]>;
}

export class LocalCityService implements CityService {
  async loadCities(): Promise<City[]> {
    try {
      return require('../../assets/cities.json');
    } catch (error) {
      console.error('Error loading cities:', error);
      return [];
    }
  }
}
