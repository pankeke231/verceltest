import {  Pressable, StyleSheet, TextInput, View } from 'react-native';
import HabitGreeting from '@/components/HabitGreeting';
import HabitCard from '@/components/HabitCard';
import Screen from '@/components/Screen';
import ProfileHeader from '@/components/ProfileHeader';
import { useCallback, useMemo, useState } from 'react';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from '@/components/themed-text';

type Habit = {id: string; title: string, streak: number; isCompleted: boolean; priority: 'low' | 'mid' | 'high'};

const INITIAL: Habit[] = [
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: true, priority: 'mid'},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false, priority: 'high'},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false, priority: 'low'},
];

export default function HomeScreen() {
  const [items, setItems] = useState<Habit[]>(INITIAL);
  const [nuevo, setNuevo] = useState("");

  const border = useThemeColor({}, "border");
  const surface = useThemeColor({}, "surface");
  const primary = useThemeColor({}, "primary");
  const onPrimary = useThemeColor({}, "onPrimary");
  const text = useThemeColor({}, "text");
  const muted = useThemeColor({}, "muted");

  const toggle = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const completed = !h.isCompleted;
        return {
          ...h,
          isCompleted: completed,
          streak: completed ? h.streak + 1 : Math.max(0, h.streak - 1),
        };
      })
    );
  }, []); 

  const addHabit = useCallback(() => {
    const title = nuevo.trim();
    if (!title) return;
    setItems((prev) => [
      {
        id: `h${Date.now()}`,
        title,
        streak: 0,
        isCompleted: false,
        priority: "low",
      },
      ...prev,
    ]);
    setNuevo("");
  }, [nuevo]);

  const total = items.length;
  const completados = useMemo(
    () => items.filter((h) => h.isCompleted).length,
    [items]
  );

  const habits = [
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: true},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false},
    {id: "h1", title: "Beber agua", streak: 3, isCompleted: false},
  ];

  return (
    <Screen>
      <ProfileHeader name = "pank" role="dev" ></ProfileHeader>
        <HabitGreeting nombre = "goat" />
        <View style={[styles.row, { alignItems: "center" }]}>
          <TextInput
          value={nuevo}
          onChangeText={setNuevo}
          placeholder="Nuevo habito (ej Meditar)"
          onSubmitEditing={addHabit}
          style={[
            styles.input,
            { backgroundColor: surface, borderColor: border, color: text },
          ]}
          />
        <Pressable
          onPress={addHabit}
          style={[styles.addBtn, { backgroundColor: primary }]}
        >
          <ThemedText>Añadir</ThemedText>
        </Pressable>
      </View>
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
   row: { flexDirection: "row", gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  addBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
