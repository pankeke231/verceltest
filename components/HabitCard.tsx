import { View, StyleSheet, Pressable } from "react-native";
import {ThemedText} from "./themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";

type Props = {
    title: string;
    streak: number;
    isCompleted?: boolean;
    priority?: 'low'| 'mid' | 'high';
    onToggle?: () => void;
};

const priorityStyles = {
    low: {
        backgroundColor: "#ECFCCB",
        color: "#3F6212"
    },
    mid: {
        backgroundColor: "#FEF9C3",
        color: "#92400E"
    },
    high: {
        backgroundColor: "#FEF9C3",
        color: "#92400E"
    },
} as const;

export default function HabitCard({
    title,
    streak,
    isCompleted = false,
    priority = 'high',
    onToggle,
}: Props){
    const surface = useThemeColor({}, "surface");
    const success = useThemeColor({}, "success");
    const border = useThemeColor({}, "border");
    
    const p = priorityStyles[priority];
    return(
        <Pressable
         onPress={onToggle} 
         style={({pressed}) => [
            styles.card, 
            {
                backgroundColor: surface, 
                opacity: pressed ? 0.96 : 1, 
                borderColor: isCompleted? success : border,
            }
            ]}
        >

            <View style = {styles.row}>
                <ThemedText style= {styles.title}>{title}</ThemedText>
                <ThemedText 
                style= {[
                    styles.badge,
                    { backgroundColor: p.backgroundColor,
                        color: p.color}
                    ]}
                >
                    {priority}
                </ThemedText>
            </View>
            <View style = {styles.row}>
                {isCompleted && <ThemedText style = {styles.badge}> Hoy </ThemedText>}
                <ThemedText style = {styles.streak}>fuego {streak} dias </ThemedText>
                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F2F6FF',
        borderRadius: 12,
        padding: 16,
        gap: 6,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardDone: {borderWidth: 1, borderColor: '#22C55E'},
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: { fontSize: 16, fontWeight: 600, color: '#0F172A'},
    badge: {fontSize: 12, color: "#16A34A"},
    streak: {fontSize: 12, color: "#16A34A"},    
})