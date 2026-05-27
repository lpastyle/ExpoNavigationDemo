import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Accueil</Text>
      <Text style={styles.desc}>
        Démonstration du Tab Navigator
      </Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',
               backgroundColor: '#F8FAFC', padding: 24 },
  titre:     { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  desc:      { fontSize: 20, color: '#64748B', textAlign: 'center',
               lineHeight: 24, marginBottom: 32 },
});
