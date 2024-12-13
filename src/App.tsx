import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TopBar from './components/topBar';
import BottomBar from './components/bottomBar';




const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TopBar />
        <BottomBar />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
