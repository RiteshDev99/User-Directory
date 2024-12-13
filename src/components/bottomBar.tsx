
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import UserProfile from '../screens/userProfile';
import Setting from '../screens/setting';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ navigation }: any) => (
    <View style={[styles.footer, styles.footerBackground]}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
        >
            <Image
                source={require('../assets/svg/home.png')}
                style={styles.footerImage}
            />
        </TouchableOpacity>
        <View style={styles.profileRound}>
            <View style={styles.innerBox}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UserProfile')}
                >
                    <Image
                        source={require('../assets/svg/userProfile.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Setting')}
        >
            <Image
                source={require('../assets/svg/setting.webp')}
                style={styles.footerImage}
            />
        </TouchableOpacity>
    </View>
);

const BottomBar = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: [styles.footer, styles.footerBackground],
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBar={(props) => <CustomTabBar {...props} />}
        >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="UserProfile" component={UserProfile} />
            <Tab.Screen name="Setting" component={Setting} />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        height: 78,
        width: '100%',
    },
    footerBackground: {
        backgroundColor: '#ffffff',
    },
    button: {
        padding: 10,
    },
    footerImage: {
        height: 30,
        width: 30,
    },
    profileRound: {
        height: 105,
        width: 105,
        borderColor: '#ffffff',
        borderTopWidth: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 52.5,
    },
    innerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        backgroundColor: '#1f232e',
        borderRadius: 35,
    },
    profileImage: {
        height: 30,
        width: 30,
        tintColor: '#fff',
    },
});

export default BottomBar;
