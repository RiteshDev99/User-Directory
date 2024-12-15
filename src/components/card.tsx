import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { UserDataProps } from '../api/userData';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type CardNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface CardProps {
    data: UserDataProps;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const navigation = useNavigation<CardNavigationProp>();

    const handlePress = () => {
        navigation.navigate('User_Details_Screen', { userData: data });
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.cardContainer}>
                <Image
                    source={require('../assets/svg/userProfile.png')}
                    style={styles.userImage}
                />

                <View style={styles.userItem}>
                    <Text style={styles.nameText}>{data.username}</Text>
                    <Text style={styles.gmailText}>{data.email}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        margin: 8,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        height: 40,
        width: 40,
        marginRight: 18,
    },
    userItem: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 4,
    },
    gmailText: {
        fontSize: 14,
        color: '#777777',
    },
});

export default Card;
