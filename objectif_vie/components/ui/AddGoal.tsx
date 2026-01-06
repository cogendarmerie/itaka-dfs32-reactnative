import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { ThemedButton } from "./ThemedButton";
import { ThemedTextInput } from "./ThemedTextInput";

export function AddGoal({ goals, setGoals }: { goals: string[]; setGoals: (goals: string[]) => void }) {
    const [newGoal, setNewGoal] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function handleAddGoal() {
        const newGoals = [...goals, newGoal];
        setGoals(newGoals);
        setNewGoal("");

        setModalVisible(false);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ThemedView style={styles.modalCenteredView}>
                    <ThemedView>
                        <ThemedButton onPress={() => setModalVisible(false)}>Close</ThemedButton>
                    </ThemedView>
                    <ThemedView style={styles.modalView}>
                        <ThemedView>
                            <ThemedText style={styles.modalTitle}>Add a new goal</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.formContainer}>
                            <ThemedTextInput placeholder="Add a goal" value={newGoal} onChangeText={setNewGoal} />
                            <ThemedButton onPress={handleAddGoal}>Add</ThemedButton>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
            </Modal>
            <ThemedButton onPress={() => setModalVisible(true)}>
                Add Goal
            </ThemedButton>
        </>
    )
}

const styles = StyleSheet.create({
    modalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 35,
        alignItems: 'flex-start',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    formContainer: {
        flexDirection: 'row',
        gap: 8
    }
});