import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {City} from '../types';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CitySearchInput} from '../components/CitySearchInput';
import {CityList} from '../components/CityList';
import {useCitiesStore} from '../store/cities';
import {useMount} from '../hooks/useMount';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    searchQuery,
    matchingCities,
    setSearchQuery,
    setSelectedCity,
    loadCities,
  } = useCitiesStore();

  useMount(loadCities);

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    navigation.navigate('NearestCities');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CitySearchInput
        searchQuery={searchQuery}
        onQueryChange={setSearchQuery}
      />
      <CityList cities={matchingCities} onCitySelect={handleCitySelect} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});
