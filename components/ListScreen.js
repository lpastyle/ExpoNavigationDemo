import { View, Text, FlatList, StyleSheet } from 'react-native';

const FRAMEWORKS = [
  { id: '1', nom: 'React Native', langage: 'JavaScript', annee: 2015 },
  { id: '2', nom: 'Flutter',      langage: 'Dart',       annee: 2018 },
  { id: '3', nom: '.NET MAUI',    langage: 'C#',         annee: 2022 },
  { id: '4', nom: 'Ionic',        langage: 'HTML/JS',    annee: 2013 },
  { id: '5', nom: 'Xamarin',      langage: 'C#',         annee: 2011 },
];

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={FRAMEWORKS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.itemNom}>{item.nom}</Text>
              <Text style={styles.itemLangage}>{item.langage}</Text>
            </View>
            <Text style={styles.itemAnnee}>{item.annee}</Text>
          </View>
        )}
        ItemSeparatorComponent={() =>
          <View style={{ height: 1, backgroundColor: '#E2E8F0' }} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:   { flex: 1, backgroundColor: '#FFF' },
  item:        { flexDirection: 'row', justifyContent: 'space-between',
                 alignItems: 'center', padding: 18, backgroundColor: '#FFF' },
  itemNom:     { fontSize: 16, fontWeight: '600', color: '#1E293B' },
  itemLangage: { fontSize: 13, color: '#64748B', marginTop: 2 },
  itemAnnee:   { fontSize: 14, fontWeight: 'bold', color: '#23B2A4' },
});
