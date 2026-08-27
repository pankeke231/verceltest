import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ejemploDestructuracionUsuario } from '@/utils/math';
import HabitGreeting from '@/components/HabitGreeting';
import HabitCard from '@/components/HabitCard';
import Screen from '@/components/Screen';
import ProfileHeader from '@/components/ProfileHeader';

export default function HomeScreen() {
  const nombre = "Jose Luis";
  const edad = 23;
  const isPremium = false;
  const messages = 0;
  const fecha = new Date();
  const hora = fecha.getHours();
  const saludo = hora < 12? "Buenos dias" : hora <  18? "Buenas tardes" : "Buenas noches";
  
  const habits = [
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: true},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false},
  ];

  return (
    <Screen>
    <View style={styles.container}>
      <ProfileHeader name = "pank" ></ProfileHeader>
        <HabitGreeting nombre = "goat" />
        <View style={{ gap: 12 }}>
          {habits.map((h) => (
            <HabitCard 
            key = {h.id}
            title={h.title}
            streak={h.streak}
            isCompleted={h.isCompleted}
            />
        ))
        }
        </View>
    </View>
    </Screen>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F2F6FF",
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
  },
});
