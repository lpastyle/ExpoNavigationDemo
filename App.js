// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ListScreen   from './components/ListScreen';
import DetailScreen  from './components/DetailScreen';

// createNativeStackNavigator() crée deux composants :
// - Stack.Navigator : le conteneur de navigation
// - Stack.Screen    : chaque écran enregistré
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer DOIT envelopper toute l'app
    // car il gère l'état de navigation
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Accueil"   // écran affiché au démarrage
        screenOptions={{             // options appliquées à TOUS les écrans
          headerStyle:      { backgroundColor: '#20232A' },
          headerTintColor:  '#61DAFB',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Accueil"
          component={HomeScreen}
          options={{ title: 'Accueil' }}
        />
        <Stack.Screen
          name="Liste"
          component={ListScreen}
          options={{ title: 'Catalogue' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // Titre dynamique basé sur les paramètres de route
          options={({ route }) => ({ title: route.params?.nom ?? 'Détail' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
