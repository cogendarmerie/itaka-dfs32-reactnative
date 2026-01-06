import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

export function ObjectifCard({ goal }: { goal: string }) {
    return ( 
        <ThemedView style={styles.stepContainer}>
            <ThemedText>{goal}</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
  }
});