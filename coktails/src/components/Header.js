import { View, Text, StyleSheet } from "react-native";

export default function Header({ children }) {
    return <View style={styles.container}>
        <Text style={styles.title}>{ children }</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#756092ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    }
})