import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataFetchingProps } from './api/dataFetching';
import TopBar from './components/topBar';
import UserList from './screens/userList';
import UserDetails from './screens/userDetails';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  UserListCard: undefined;
  UserDetails: { userData: DataFetchingProps, imgUrl: string };
};


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="UserListCard"
              component={UserListWithTopBar}
              options={{
                headerShown: false,
                animation: 'slide_from_left',
              }}
            />
            <Stack.Screen
              name="UserDetails"
              component={UserDetails}
              options={{
                headerShown: true,
                animation: 'slide_from_right',
                title: 'User Details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const UserListWithTopBar: React.FC = () => (
  <>
    <TopBar />
    <UserList />
  </>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
