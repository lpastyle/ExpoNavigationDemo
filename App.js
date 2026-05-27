import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { createBottomTabNavigator }    from '@react-navigation/bottom-tabs';

import HomeScreen      from './components/HomeScreen';
import ListScreen      from './components/ListScreen';
import DetailScreen    from './components/DetailScreen';
import ProfileScreen   from './components/ProfileScreen';
import SearchScreen    from './components/SearchScreen';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

// ── Stack dédié à l'onglet Accueil ──────────────────────
// On encapsule les écrans Accueil / Liste / Détail dans un
// Stack séparé, lui-même dans l'onglet 'Accueil'.
// Cela permet d'avoir la Tab Bar visible pendant toute la
// navigation dans la pile Accueil → Liste → Détail.
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:      { backgroundColor: '#20232A' },
        headerTintColor:  '#61DAFB',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Accueil" component={HomeScreen}
        options={{ title: 'Accueil' }} />
      <Stack.Screen name="Liste"   component={ListScreen}
        options={{ title: 'Catalogue' }} />
      <Stack.Screen name="Detail"  component={DetailScreen}
        options={({ route }) => ({ title: route.params?.nom ?? 'Détail' })} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen name="Home"   component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile"    component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
