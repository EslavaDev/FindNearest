import {create} from 'zustand';
import {HaversineDistanceCalculator} from '../services/distance.service';
import {City, CityWithDistance} from '../types';
import {LocalCityService} from '../services/city.service';

interface CitiesState {
  cities: City[];
  searchQuery: string;
  selectedCity: City | null;
  matchingCities: City[];
  nearestCities: CityWithDistance[];
  loadCities: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCity: (city: City | null) => void;
}
const cityService = new LocalCityService();
const distanceCalculator = new HaversineDistanceCalculator();

export const useCitiesStore = create<CitiesState>((set, get) => ({
  cities: [],
  searchQuery: '',
  selectedCity: null,
  matchingCities: [],
  nearestCities: [],

  loadCities: async () => {
    try {
      const loadedCities = await cityService.loadCities();
      set({cities: loadedCities, matchingCities: loadedCities});
    } catch (error) {
      console.error('Error loading cities:', error);
    }
  },

  setSearchQuery: (query: string) => {
    const {cities} = get();
    set({
      searchQuery: query,
      matchingCities: !query
        ? cities
        : cities
            .filter(city =>
              city.name.toLowerCase().includes(query.toLowerCase()),
            )
            .slice(0, 10),
    });
  },

  setSelectedCity: (city: City | null) => {
    const {cities} = get();
    set({
      selectedCity: city,
      nearestCities: !city
        ? []
        : cities
            .filter(c => c.name !== city.name)
            .map(c => ({
              ...c,
              distance: distanceCalculator.calculate(city, c),
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 4),
    });
  },
}));
