import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface CitySearchInputProps {
  searchQuery: string;
  onQueryChange: (query: string) => void;
  placeholder?: string;
}

export const CitySearchInput: React.FC<CitySearchInputProps> = ({
  searchQuery,
  onQueryChange,
  placeholder = 'Search for a city...',
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={searchQuery}
      onChangeText={onQueryChange}
      placeholder={placeholder}
      placeholderTextColor="#666"
      testID="city-search-input"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});
