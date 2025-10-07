// AI Fitness Tracker MVP (React Native with Expo, TypeScript)
// Debug fix: Ensure correct React Native structure, consistent bracket closure, and testable structure.

import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

interface Workout {
  id: string;
  date: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
}

function recommendWeight(prevWeight: number, goal: 'strength' | 'hypertrophy') {
  if (goal === 'strength') return prevWeight + 2.5;
  if (goal === 'hypertrophy') return prevWeight + 1;
  return prevWeight;
}

export default function FitnessTracker() {
  const [workouts, setWorkouts] = useState<Workout[]>([{
    id: '1',
    date: '2025-06-28',
    exercises: [
      { name: 'Bench Press', sets: 3, reps: 8, weight: 60 },
      { name: 'Squat', sets: 3, reps: 8, weight: 80 }
    ]
  }]);

  const navigation = useNavigation();

  function playAudio(message: string) {
    Speech.speak(message);
  }

  function startWorkout() {
    playAudio('Start workout');
    if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate('WorkoutTimer');
    }
  }

  return (
    <View style={{ padding: 16, flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Your Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderWidth: 1, borderRadius: 8, borderColor: '#ddd', marginBottom: 8 }}>
            <Text style={{ fontWeight: '600', marginBottom: 4 }}>{item.date}</Text>
            {item.exercises.map((ex, idx) => (
              <Text key={idx}>{`${ex.name}: ${ex.sets}x${ex.reps} @ ${ex.weight}kg`}</Text>
            ))}
          </View>
        )}
      />
      <Button title="Start Workout" onPress={startWorkout} />
    </View>
  );
}
