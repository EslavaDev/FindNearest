import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {City, CityWithDistance} from '../../types';

interface NearestCitiesProps {
    cities: CityWithDistance[];
    selectedCity: City;
  }

  export const NearestCities: React.FC<NearestCitiesProps> = ({
    cities,
    selectedCity,
  }) => (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nearest Cities to {selectedCity.name}
      </Text>
      <FlatList
        data={cities}
        keyExtractor={city => `${city.name}-${city.distance}`}
        renderItem={({ item: city }) => (
          <View style={styles.cityItem} testID={`nearest-city-${city.name}`}>
            <Text style={styles.cityName}>{city.name}</Text>
            <Text style={styles.distance}>
              {Math.round(city.distance)} km away
            </Text>
          </View>
        )}
      />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cityItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '500',
  },
  distance: {
    fontSize: 14,
    color: '#666',
  },
});
