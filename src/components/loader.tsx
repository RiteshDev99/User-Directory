import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';


const Loader = () => {
    return (
        <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#2C3335" />
        </View>
    );
};

const styles = StyleSheet.create({
    centerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;