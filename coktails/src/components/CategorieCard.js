import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategorieCard({ category }) {
    const naviguation = useNavigation();
    
    function handleSelect() {
        naviguation.navigate('CategoryCoktails', { category: category.strCategory });
    }

    return <Pressable onPress={handleSelect}>
        <View style={styles.container}>
            <Text style={styles.title}>{ category.strCategory }</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        marginBottom: 8,
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    }
});