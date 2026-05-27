import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// navigation et route sont injectés automatiquement par React Navigation
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Accueil</Text>
      <Text style={styles.desc}>
        Démonstration du Stack Navigator
      </Text>

      {/* navigate('NomEcran') — empile l'écran */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Liste')}
      >
        <Text style={styles.btnTxt}>Voir le catalogue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',
               backgroundColor: '#F8FAFC', padding: 24 },
  titre:     { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  desc:      { fontSize: 16, color: '#64748B', textAlign: 'center',
               lineHeight: 24, marginBottom: 32 },
  btn:       { backgroundColor: '#20232A', padding: 16,
               borderRadius: 12, width: '100%', alignItems: 'center' },
  btnTxt:    { color: '#61DAFB', fontWeight: 'bold', fontSize: 16 },
});
