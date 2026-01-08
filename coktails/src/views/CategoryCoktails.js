import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { getCoktailsByCategory } from '../infrastructure/api';
import CoktailCard from '../components/CoktailCard';
import Header from '../components/Header';
import Loader from '../components/Loader';

export default function CategoryCoktails({ route, navigation }) {
  const { category } = route.params;
  const [coktails, setCoktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCoktails() {
    try {
      const data = await getCoktailsByCategory(category);
      setCoktails(data || []);
    } catch (error) {
      console.error('Failed to fetch coktails:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCoktails();
  }, [category]);

  const handleCoktailPress = (coktail) => {
    navigation.navigate('CoktailDetail', { id: coktail.idDrink });
  };

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  return (
    <View style={styles.wrapper}>
      <Header>{category}</Header>
      <FlatList
        data={coktails}
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
});