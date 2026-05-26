import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// navigation et route sont injectés automatiquement par React Navigation
export default function DetailScreen({ navigation, route }) {
  // route.params contient tous les paramètres passés lors du navigate()
  const { nom, langage, annee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nom}>{nom}</Text>

      <View style={styles.card}>
        <LigneDetail label="Langage" valeur={langage} />
        <LigneDetail label="Année"   valeur={String(annee)} />
      </View>

      {/* goBack() — dépile l'écran courant */}
      <TouchableOpacity
        style={styles.btnRetour}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnRetourTxt}>← Retour à la liste</Text>
      </TouchableOpacity>

      {/* navigate() vers un écran déjà dans la pile = remonte sans dupliquer */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Accueil')}
      >
        <Text style={styles.lienAccueil}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

function LigneDetail({ label, valeur }) {
  return (
    <View style={styles.ligne}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.valeur}>{valeur}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: '#F8FAFC', padding: 24 },
  nom:          { fontSize: 28, fontWeight: 'bold', color: '#1E293B',
                  marginBottom: 24 },
  card:         { backgroundColor: '#FFF', borderRadius: 14, padding: 16,
                  marginBottom: 24, borderWidth: 1, borderColor: '#E2E8F0' },
  ligne:        { flexDirection: 'row', justifyContent: 'space-between',
                  paddingVertical: 10, borderBottomWidth: 1,
                  borderBottomColor: '#F1F5F9' },
  label:        { fontSize: 14, color: '#64748B', fontWeight: '600' },
  valeur:       { fontSize: 14, color: '#1E293B', fontWeight: 'bold' },
  btnRetour:    { backgroundColor: '#20232A', padding: 14,
                  borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  btnRetourTxt: { color: '#61DAFB', fontWeight: 'bold' },
  lienAccueil:  { color: '#23B2A4', textAlign: 'center',
                  fontSize: 14, textDecorationLine: 'underline' },
});
