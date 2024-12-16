import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { UserListCardProps } from './userListCard';

const UserDetailsCard: React.FC<UserListCardProps> = ({ data }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.userProfile}>
                <Image
                    source={require('../assets/svg/profileImage.webp')}
                    style={styles.userImage}
                />
                <Text style={styles.nameText}>{data.name}</Text>
                <Text style={styles.emailText}>{data.email}</Text>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Address</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>
                        {data.address.street}, {data.address.suite}
                    </Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>
                        {data.address.city} - {data.address.zipcode}
                    </Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>
                        Geo: {data.address.geo.lat}, {data.address.geo.lng}
                    </Text>
                </View>
            </View>
            <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Company</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>{data.company.name}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>{data.company.catchPhrase}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailText}>{data.company.bs}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 16,
        padding: 20,
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
        borderColor: '#2F363F',
        marginBottom: 12,
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2F363F',
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
        color: '#2F363F',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#2F363F',
        paddingBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2F363F',
        marginRight: 8,
    },
    detailText: {
        fontSize: 16,
        color: '#666',
    },
});

export default UserDetailsCard;
