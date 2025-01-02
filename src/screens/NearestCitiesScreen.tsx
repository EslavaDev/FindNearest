import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NearestCities} from '../components/NearestCities';
import {useCitiesStore} from '../store/cities';

export function NearestCitiesScreen() {
  const {selectedCity, nearestCities} = useCitiesStore();

  if (!selectedCity) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NearestCities cities={nearestCities} selectedCity={selectedCity} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
