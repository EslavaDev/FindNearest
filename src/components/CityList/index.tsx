import React from 'react';
import {StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {City} from '../../types';

interface CityListProps {
  cities: City[];
  onCitySelect: (city: City) => void;
}

export const CityList: React.FC<CityListProps> = ({cities, onCitySelect}) => (
  <FlatList
    data={cities}
    keyExtractor={city => `${city.name}-${city.lat}-${city.lng}`}
    renderItem={({item: city}) => (
      <TouchableOpacity
        style={styles.cityItem}
        onPress={() => onCitySelect(city)}
        testID={`city-item-${city.name}`}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.countryName}>{city.country}</Text>
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '500',
  },
  countryName: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
