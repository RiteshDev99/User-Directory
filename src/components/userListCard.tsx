import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { DataFetchingProps } from '../api/dataFetching';

type CardNavigationProp = StackNavigationProp<RootStackParamList, 'UserListCard'>;

export interface UserListCardProps {
    data: DataFetchingProps;
    imgUrl: string;
}

const UserListCard: React.FC<UserListCardProps> = ({ data, imgUrl }) => {
    const navigation = useNavigation<CardNavigationProp>();

    const handlePress = () => {
        navigation.navigate('UserDetails', { userData: data, imgUrl: imgUrl });
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.userImage}
                />
                <View style={styles.userItem}>
                    <Text style={styles.nameText}>{data.name}</Text>
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
        height: 50,
        width: 50,
        marginRight: 18,
        borderRadius: '100%',
    },
    userItem: {
        flex: 1,
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2F363F',
        marginBottom: 4,
    },
    gmailText: {
        fontSize: 14,
        color: '#666',
    },
});

export default UserListCard;
