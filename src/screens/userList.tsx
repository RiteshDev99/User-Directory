import React from 'react';
import { View, StyleSheet } from 'react-native';
import DataFetching from '../api/dataFetching';

const UserList = () => {
    return (
        <View style={styles.container}>
            <DataFetching />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        paddingBottom: 130,
    },
});
export default UserList;
