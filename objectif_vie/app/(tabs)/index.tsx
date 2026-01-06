import { FlatList, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
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

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Objectif de vie!</ThemedText>
      </ThemedView>
      <SafeAreaView style={styles.goalsWrapper}>
        <FlatList
          data={sampleGoals}
          renderItem={({ item }) => <ObjectifCard goal={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
      <AddGoal goals={sampleGoals} setGoals={setSampleGoals} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
