import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Accueil</Text>
      <Text style={styles.subtitle}>Bienvenue sur la page principale</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('details')}>
        <Text style={styles.buttonText}>Aller aux Détails →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f0f4ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4f6ef7',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
