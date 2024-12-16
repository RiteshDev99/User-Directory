import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Loader from '../components/loader';
import UserListCard from '../components/userListCard';

export interface DataFetchingProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

const DataFetching = () => {
    const [users, setUsers] = useState<DataFetchingProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [filterData, setFilterData] = useState<DataFetchingProps[]>([]); // Explicitly define the type
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = users.filter(user =>
            user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
        setFilterData(filtered);
    };

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setFilterData(data);
            })
            .catch(fetchError => {
                setError(fetchError.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <>
            <TouchableOpacity style={styles.searchBarContainer}>
                <Image
                    source={require('../assets/svg/searchImage.png')}
                    style={styles.searchImage}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search here..."
                    placeholderTextColor="#888"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </TouchableOpacity>
            <FlatList
                data={filterData}
                renderItem={({ item }) => (
                    <UserListCard data={item} />
                )}
                keyExtractor={(item) => item.email}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    error: {
        color: 'red',
        fontSize: 18,
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

export default DataFetching;
