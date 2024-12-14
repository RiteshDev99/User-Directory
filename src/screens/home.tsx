import React from 'react';
import { View,  StyleSheet } from 'react-native';
import UserData from '../api/userData';

const Home = () => {
    return (
        <View style={styles.container}>
            <UserData />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
    },
});
export default Home;
