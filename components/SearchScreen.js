import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Recherche</Text>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un framework..."
        value={query}
        onChangeText={setQuery}
      />
      {query.length > 0 && (
        <Text style={styles.result}>
          Recherche : "{query}"
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F8FAFC', marginTop: 40 },
  titre:     { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input:     { borderWidth: 1.5, borderColor: '#CBD5E1', borderRadius: 10,
               padding: 14, fontSize: 18, backgroundColor: '#FFF' },
  result:    { marginTop: 16, color: '#076564', fontSize: 16 },
});
