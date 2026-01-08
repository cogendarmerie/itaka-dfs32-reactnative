import { useEffect, useState } from 'react';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCategories } from '../infrastructure/api';
import CategorieCard from '../components/CategorieCard';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const cat = await getCategories();
      setCategories(cat);
    } catch (error) {
      console.error('Failed to fetch categories in App:', error);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          refreshControl={<RefreshControl
            refreshing={isLoading}
            onRefresh={fetchCategories}
          />}
        >
          <View style={styles.wrapper}>
            <Header>Categories</Header>
            <View style={styles.container}>
                <FlatList 
                    data={categories}
                    keyExtractor={(item, index) => item.idDrink ? item.idDrink : index.toString() }
                    renderItem={({ item }) => <CategorieCard category={item} />}
                />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50,
      padding: 24,
      flexDirection: 'column',
      gap: 16,
  },
});