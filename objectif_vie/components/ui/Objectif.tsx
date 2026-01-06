import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { ThemedButton } from "./ThemedButton";
import { ThemedTextInput } from "./ThemedTextInput";

export function ObjectifCard({ goal, updateGoal }: { goal: string, updateGoal?: (updateGoal: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState(goal);

  function handleEditGoal() {
    setEditedGoal(editedGoal);
    setEditing(false);

    if (updateGoal) {
      updateGoal(editedGoal);
    }
  }

  return editing ? (
    <ThemedView>
      <ThemedView style={styles.formContainer}>
          <ThemedTextInput placeholder="Add a goal" value={editedGoal} onChangeText={setEditedGoal} />
          <ThemedButton onPress={handleEditGoal}>Edit</ThemedButton>
      </ThemedView>
    </ThemedView>
  ) :  ( 
    <ThemedView style={styles.stepContainer}>
      <Pressable onPress={() => setEditing(true)}>
        <ThemedText>{goal}</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
  },
  formContainer: {
      flexDirection: 'row',
      gap: 8
  }
});