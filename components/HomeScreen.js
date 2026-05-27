import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Hamburger menu — coin supérieur gauche */}
      <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
        <Text style={styles.menuTxt}>☰ Menu</Text>
      </TouchableOpacity>

      {/* Contenu centré */}
      <View style={styles.content}>
        <Text style={styles.titre}>Accueil</Text>
        <Text style={styles.desc}>
          Démonstration du Drawer Navigator
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },
  menuBtn: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
  menuTxt: {
    fontSize: 24,
    fontWeight: '600',
    color: '#20232A',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titre: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  desc: {
    fontSize: 20, color: '#64748B', textAlign: 'center',
    lineHeight: 24, marginBottom: 32,
  },
});
