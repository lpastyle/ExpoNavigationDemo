import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen    from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen  from './components/SearchScreen';

const Tab   = createBottomTabNavigator();

// ── Tab Navigator principal ──────────────────────────────
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,   // le Stack interne gère le header
          tabBarStyle: {
            backgroundColor: '#20232A',
            borderTopColor:  '#333',
          },
          tabBarActiveTintColor:   '#61DAFB',
          tabBarInactiveTintColor: '#6B7280',
          // Taille du texte sous les icônes
          tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
          // Icône de chaque onglet selon son nom
          tabBarIcon: ({ focused, color }) => {
            const icons = {
              'Home':  focused ? '🏠' : '🏡',
              'Search': focused ? '🔍' : '🔎',
              'Profile':   focused ? '👤' : '👥',
            };
            return <Text style={{ fontSize: 20 }}>
              {icons[route.name] ?? '⭕'}
            </Text>;
          },
        })}
      >
        {/* L'onglet Accueil contient le Stack complet */}
        <Tab.Screen name="Home"   component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile"    component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
