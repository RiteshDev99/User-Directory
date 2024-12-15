import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';
import CardContainer from '../components/cardContainer';


type UserDetailsScreenRouteProp = RouteProp<RootStackParamList, 'User_Details_Screen'>;

type UserProfileProps = {
    route: UserDetailsScreenRouteProp;
};


const UserProfile: React.FC<UserProfileProps> = ({ route }) => {

    const { userData } = route.params;


    return (
        <View style={styles.container} >
            <CardContainer data={userData} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
    },
});
export default UserProfile;
