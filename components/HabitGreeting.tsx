import { View, Text, StyleSheet } from "react-native";

export default function HabitGreeting({nombre = "Hola"}){
    const fecha = new Date();
    const h = fecha.getHours();
    const saludo = h < 12? "Buenos dias" : h <  18? "Buenas tardes" : "Buenas noches";


    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                {saludo}
                {nombre ? `${nombre}`: ""}
            </Text>
            <Text style = {[styles.subtitle, {color: "#2563EB"}]}>
                Hoy es {fecha.toLocaleDateString()} - {fecha.toLocaleTimeString()}
            </Text>
            <View style = {{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <Text>Izquierda</Text>
            <Text>centro</Text>
            <Text>derecha</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {gap: 4, marginBottom: 16},
    title: {fontSize: 22, fontWeight: 700},
    subtitle: {fontSize: 12, color: '#334155'},
});
