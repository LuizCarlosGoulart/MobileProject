import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const countries = [
  { name: 'Brasil', key: 'BrazilGallery' },
  { name: 'Inglaterra', key: 'EnglandGallery' },
];

const CountryList = () => {
  const navigation = useNavigation();

  const handlePress = (key: string) => {
    navigation.navigate(key as never);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item.key)}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2f2f2f',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
  },
  item: {
    padding: 20,
    backgroundColor: '#3f3f3f',
    borderRadius: 10,
    marginBottom: 10,
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
  },
});

export default CountryList;
