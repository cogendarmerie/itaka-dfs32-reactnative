import { StyleSheet, Text, View } from "react-native";

export default function CategorieCard({ category }) {
    return <View style={styles.container}>
        <Text style={styles.title}>{ category.strCategory }</Text>
    </View>
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