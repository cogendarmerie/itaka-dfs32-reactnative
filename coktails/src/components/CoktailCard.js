import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function CoktailCard({ coktail, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: coktail.strDrinkThumb }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={2}>
        {coktail.strDrink}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    padding: 8,
    textAlign: 'center',
  },
});
