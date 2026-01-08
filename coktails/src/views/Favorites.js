import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import CoktailCard from '../components/CoktailCard';
import Header from '../components/Header';
import Loader from '../components/Loader';

export default function Favorites({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadFavorites() {
    try {
      setIsLoading(true);
      const savedFavorites = await AsyncStorage.getItem('favorites');
      if (savedFavorites && typeof savedFavorites === 'string') {
        try {
          const parsed = JSON.parse(savedFavorites);
          if (Array.isArray(parsed)) {
            setFavorites(parsed);
          } else {
            setFavorites([]);
          }
        } catch (parseError) {
          console.error('Error parsing favorites:', parseError);
          // Reset if corrupted
          await AsyncStorage.removeItem('favorites');
          setFavorites([]);
        }
      } else {
        setFavorites([]);
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
      setFavorites([]);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const handleCoktailPress = (coktail) => {
    navigation.navigate('CoktailDetail', { id: coktail.idDrink });
  };

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  return (
    <View style={styles.wrapper}>
      <Header>Mes Favoris</Header>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Aucun cocktail en favoris pour le moment</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          numColumns={2}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => (
            <CoktailCard 
              coktail={item}
              onPress={() => handleCoktailPress(item)}
            />
          )}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
