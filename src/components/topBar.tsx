import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const TopBar = () => {


    return (
        <View style={[styles.container, styles.containerBackground]}>
            <View style={[styles.itemsListContainer, styles.itemsListBackground]}>
                <Image
                    source={require('../assets/svg/menu.webp')}
                    style={styles.menuImage}
                />
                <View style={styles.AppNameContainer}>
                    <Text style={styles.AppNameText}>User Directory</Text>
                </View>
                <Image
                    source={require('../assets/svg/notification.png')}
                    style={styles.notificationImage}
                />
            </View>
            <TouchableOpacity style={styles.searchBarContainer}
            >
                <Image
                    source={require('../assets/svg/searchImage.png')}
                    style={styles.searchImage}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search here..."
                    placeholderTextColor="#888"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: '100%',
    },
    containerBackground: {
        // backgroundColor:'#0A79DF',
    },
    itemsListContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    itemsListBackground: {
        // backgroundColor:'#01CBC6',
    },
    menuImage: {
        height: 45,
        width: 35,
    },
    AppNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    AppNameText: {
        fontSize: 22,
        color: '#2F363F',
        fontWeight: 'bold',
    },
    notificationImage: {
        height: 28,
        width: 28,
    },
    searchBarContainer: {
        height: 55,
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchImage: {
        height: 35,
        width: 35,
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#2F363F',

    },
});
export default TopBar;
