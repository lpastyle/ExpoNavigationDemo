import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
// ⚠️ Import OBLIGATOIRE pour le Drawer (à placer en premier dans App.js)
import 'react-native-gesture-handler';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
import ParametersScreen from './components/ParametersScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


// ── Tab Navigator  ──────────────────────────────
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,   // le Stack interne gère le header
        tabBarStyle: {
          backgroundColor: '#20232A',
          borderTopColor: '#333',
        },
        tabBarActiveTintColor: '#61DAFB',
        tabBarInactiveTintColor: '#6B7280',
        // Taille du texte sous les icônes
        tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
        // Icône de chaque onglet selon son nom
        tabBarIcon: ({ focused, color }) => {
          const icons = {
            'Home': focused ? '🏠' : '🏡',
            'Search': focused ? '🔍' : '🔎',
            'Profile': focused ? '👤' : '👥',
          };
          return <Text style={{ fontSize: 20 }}>
            {icons[route.name] ?? '⭕'}
          </Text>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>);
}

// DrawerNavigator — enveloppe le TabNavigator
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false, // le Tab gère les headers
          drawerStyle: { backgroundColor: '#20232A', width: 260 },
          drawerActiveTintColor: '#61DAFB',
          drawerInactiveTintColor: '#9CA3AF',
          drawerLabelStyle: { fontSize: 15, fontWeight: '600' },

        }}>
        {/* L'app principale = le Tab Navigator */}
        <Drawer.Screen
          name="AppPrincipale"
          component={TabNavigator}
          options={{
            title: 'Application',
            drawerLabel: 'Accueil',
            drawerIcon: () => <Text>🏠</Text>
          }}
        />
        {/* Paramètres — accessible depuis le Drawer */}
        <Drawer.Screen
          name="Parametres"
          component={ParametersScreen}
          options={{
            title: 'Paramètres',
            drawerLabel: 'Paramètres',
            drawerIcon: () => <Text>⚙️</Text>
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}
