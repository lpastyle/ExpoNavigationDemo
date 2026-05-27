import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTxt}>PN</Text>
      </View>
      <Text style={styles.nom}>NOM Prénom</Text>
      <Text style={styles.role}>Profession</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',
               backgroundColor: '#F8FAFC' },
  avatar:    { width: 80, height: 80, borderRadius: 40,
               backgroundColor: '#20232A', alignItems: 'center',
               justifyContent: 'center', marginBottom: 12 },
  avatarTxt: { color: '#61DAFB', fontSize: 26, fontWeight: 'bold' },
  nom:       { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  role:      { fontSize: 15, color: '#64748B', marginTop: 4 },
});
