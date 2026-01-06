import { FlatList, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AddGoal } from '@/components/ui/AddGoal';
import { ObjectifCard } from '@/components/ui/Objectif';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [sampleGoals, setSampleGoals] = useState<string[]>([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  function updateGoal(index: number, updatedGoal: string) {
    const newGoals = [...sampleGoals];
    newGoals[index] = updatedGoal;
    setSampleGoals(newGoals);
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.wrapper}
      keyboardVerticalOffset={100}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Objectif de vie!</ThemedText>
      </ThemedView>
      <SafeAreaView style={styles.goalsWrapper}>
        <FlatList
          data={sampleGoals}
          renderItem={({ item, index }) => <ObjectifCard goal={item} updateGoal={(updatedGoal) => updateGoal(index, updatedGoal)} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
      <AddGoal goals={sampleGoals} setGoals={setSampleGoals} />
      <ThemedText type='help'>Cliquez sur un objectif pour éditer</ThemedText>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    paddingTop: 48,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  goalsWrapper: {
    flexDirection: 'column',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
