import { View, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    streak: number;
    isCompleted?: boolean;
    priority?: 'low'| 'mid' | 'high';
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
    priority = 'mid',
}: Props){
    const p = priorityStyles[priority];
    return(
        <View style = {[styles.card, isCompleted && styles.cardDone]}>
            <View style = {styles.row}>
                <Text style= {styles.title}>{title}</Text>
                <Text 
                style= {[
                    styles.badge,
                    { backgroundColor: p.backgroundColor,
                        color: p.color}
                    ]}
                >
                    {priority}
                </Text>
            </View>
            <View style = {styles.row}>
                {isCompleted && <Text style = {styles.badge}> Hoy </Text>}
                <Text style = {styles.streak}>fuego {streak} dias </Text>
                
            </View>
        </View>
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
    
})