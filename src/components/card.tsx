import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserDataProps } from '../api/userData';

const Card: React.FC<UserDataProps> = ({ name, email }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.gmailText}>{email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        margin: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    gmailText: {
        fontSize: 16,
        color: '#666',
    },
});

export default Card;
