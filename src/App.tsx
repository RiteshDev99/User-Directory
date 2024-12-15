import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import UserProfile from './screens/userProfile';
import { UserDataProps } from './api/userData';
import TopBar from './components/topBar';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  User_Details_Screen: { userData: UserDataProps };
};

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeWithTopBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="User_Details_Screen"
            component={UserProfile}
            options={{
              headerShown: true,
              title: 'User Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const HomeWithTopBar: React.FC = () => (
  <>
    <TopBar />
    <Home />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
