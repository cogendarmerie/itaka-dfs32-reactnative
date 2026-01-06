import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";

export function ThemedButton(props: any) {
    return (
        <Pressable {...props} style={[styles.button, props.style]}>
            <ThemedText style={styles.text}>{props.children}</ThemedText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    text: {
        color: '#000',
        fontWeight: '500'
    }
});