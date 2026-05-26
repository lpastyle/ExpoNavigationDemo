import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <View style={styles.container}>
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'details' && (
        <DetailsScreen onNavigate={setCurrentScreen} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
