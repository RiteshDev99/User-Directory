import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardProps } from './card';

const CardContainer: React.FC<CardProps> = ({ data }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.userProfile}>
                <Image
                    source={require('../assets/svg/userProfile.png')}
                    style={styles.userImage}
                />
                <Text style={styles.nameText}>{data.username}</Text>
                <Text style={styles.emailText}>{data.email}</Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.detailLabel}>Name:</Text>
                <Text style={styles.detailText}>{data.name}</Text>

                <Text style={styles.detailLabel}>Phone:</Text>
                <Text style={styles.detailText}>{data.phone}</Text>

                <Text style={styles.detailLabel}>Website:</Text>
                <Text style={styles.detailText}>{data.website}</Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Address</Text>
                <Text style={styles.detailText}>
                    {data.address.street}, {data.address.suite}
                </Text>
                <Text style={styles.detailText}>
                    {data.address.city} - {data.address.zipcode}
                </Text>
                <Text style={styles.detailText}>
                    Geo: {data.address.geo.lat}, {data.address.geo.lng}
                </Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Company</Text>
                <Text style={styles.detailText}>{data.company.name}</Text>
                <Text style={styles.detailText}>{data.company.catchPhrase}</Text>
                <Text style={styles.detailText}>{data.company.bs}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        margin: 16,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    userProfile: {
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
        borderRadius: 12,
    },
    userImage: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        marginBottom: 12,
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    emailText: {
        fontSize: 14,
        color: '#666',
    },
    detailsSection: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingBottom: 4,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginBottom: 2,
    },
    detailText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 6,
    },
});

export default CardContainer;
