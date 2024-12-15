import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';
import UserDetailsCard from '../components/userDetailsCard';

type UserDetailsScreenRouteProp = RouteProp<RootStackParamList, 'User_Details_Screen'>;

type UserDetailsProps = {
    route?: UserDetailsScreenRouteProp;
};

const UserDetails: React.FC<UserDetailsProps> = ({ route }) => {
    const userData = route?.params?.userData;

    return (
        <View style={styles.container}>
            {userData ? (
                <UserDetailsCard data={userData} />
            ) : (
                <View>
                    {/* Fallback UI when no userData */}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default UserDetails;
