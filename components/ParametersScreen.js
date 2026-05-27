import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ParametresScreen({ navigation }) {
    const [notifs, setNotifs] = useState(true);
    const [darkMode, setDark] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.backTxt}>← Retour</Text>
            </TouchableOpacity>
            <Text style={styles.titre}>Paramètres</Text>
            <View style={styles.option}>
                <Text style={styles.optionLabel}>Notifications</Text>
                <Switch value={notifs} onValueChange={setNotifs}
                    trackColor={{ true: '#23B2A4' }} />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionLabel}>Mode sombre</Text>
                <Switch value={darkMode} onValueChange={setDark}
                    trackColor={{ true: '#23B2A4' }} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#F8FAFC', marginTop: 50 },
    backBtn: { marginBottom: 16 },
    backTxt: { fontSize: 16, color: '#61DAFB', fontWeight: '600' },
    titre: { fontSize: 26, fontWeight: 'bold', marginBottom: 24 },
    option: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingVertical: 14,
        borderBottomWidth: 1, borderBottomColor: '#E2E8F0'
    },
    optionLabel: { fontSize: 16, color: '#1E293B' },
});