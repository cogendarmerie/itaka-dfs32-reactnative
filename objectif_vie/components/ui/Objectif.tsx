import { useRef, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { ThemedButton } from "./ThemedButton";
import { ThemedTextInput } from "./ThemedTextInput";

export function ObjectifCard({ goal, updateGoal }: { goal: string, updateGoal?: (updateGoal: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [editedGoal, setEditedGoal] = useState(goal);
  const textInputRef = useRef(null);

  function handleEditGoal() {
    if (updateGoal) {
      updateGoal(editedGoal);
    }
    setEditing(false);
  }

  return editing ? (
    <ThemedView style={styles.formContainer}>
      <ThemedTextInput 
        ref={textInputRef}
        placeholder="Add a goal" 
        value={editedGoal} 
        onChangeText={setEditedGoal}
        autoFocus={true}
        returnKeyType="done"
        onSubmitEditing={handleEditGoal} 
        blurOnSubmit={false}
      />
      <ThemedButton onPress={handleEditGoal}>✓</ThemedButton>
    </ThemedView>
  ) : ( 
    <ThemedView style={styles.stepContainer}>
      <Pressable onPress={() => {
        setEditing(true);
        setTimeout(() => textInputRef.current?.focus(), 100);
      }}>
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