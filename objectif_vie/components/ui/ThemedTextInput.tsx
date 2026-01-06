import { StyleSheet, TextInput } from "react-native";

export function ThemedTextInput(props: any) {
    return (
        <TextInput {...props} style={[styles.input, props.style]} />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 4,
        height: 40,
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#fff',
    }
});