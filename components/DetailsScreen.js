import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ onNavigate }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Détails</Text>
      <Text style={styles.subtitle}>Voici la page de détails</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('home')}>
        <Text style={styles.buttonText}>← Retour à l'accueil</Text>
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
    backgroundColor: '#fff7ed',
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
    backgroundColor: '#f97316',
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
